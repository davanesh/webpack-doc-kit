import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown';
import helpers from './helpers/index.mjs';
import partials from './partials/index.mjs';

export class DocKitTheme extends MarkdownTheme {
  getRenderContext(page) {
    this.application.options.setValue('hidePageHeader', true);
    this.application.options.setValue('hideBreadcrumbs', true);
    this.application.options.setValue('propertiesFormat', 'table');
    return new DocKitThemeContext(this, page, this.application.options);
  }
}

export class DocKitThemeContext extends MarkdownThemeContext {
  helpers = {
    ...this.helpers,

    /** @param {import('typedoc').ParameterReflection} */
    typedListItem: ({ label, name, type, comment }) => {
      const namePart = label ? ` ${label}:` : name ? ` \`${name}\`` : "";
      const typePart = type
        ? ` ${typeof type === "string" ? type : this.partials.someType(type)}`
        : "";
      const descPart = comment
        ? ` ${this.helpers.getCommentParts(comment.summary ?? comment.content)}`
        : "";

      return `*${namePart}${typePart}${descPart}`;
    },

    typedList: (entries) => entries.map(this.helpers.typedListItem).join("\n"),
  };
  partials = {
    ...this.partials,
    ...typePartials,

    constructor: (model, options) => {
      return model.signatures?.map(signature => {
        const params = signature.parameters ?? [];
        const className = model.parent?.name ?? "Unknown";
        const allOptional = params.length > 0 && 
                            params.every(p => p.flags?.isOptional);
        const paramStr = allOptional
          ? `[${params.map(p => p.name).join(", ")}]`
          : params.map(p => 
              p.flags?.isOptional ? `[${p.name}]` : p.name
            ).join(", ");
        const title = `\`new ${className}(${paramStr})\``;
        const paramsList = params.length 
          ? this.helpers.typedList(params) 
          : "";
        return [
          `#### ${title}`,
          paramsList,
        ].filter(Boolean).join("\n");
      }).join("\n\n") ?? "";
    },
    // Removes *** horizontal rules between members
    members: (model, options) => {
      const items = model.filter(
        (item) => !this.router.hasOwnDocument(item)
      );
      return items
        .map(item =>
          this.partials.memberContainer(item, {
            headingLevel: options.headingLevel,
            groupTitle: options.groupTitle,
          })
        )
        .filter(Boolean)
        .join("\n\n");
    },

    // Removes ### Constructors / ### Methods / ### Properties headings
    groups: (model, options) => {
      return (model.groups ?? [])
        .flatMap(group => {
          // Skip properties — already shown in constructor params
          const isPropertiesGroup = group.children?.every(
            child => child.kind === ReflectionKind.Property
          );
          if (isPropertiesGroup) return [];

          const children = group.children?.filter(
            child => child.isDeclaration()
          ) ?? [];
          if (!children.length) return [];

          return [
            this.partials.members(children, {
              headingLevel: options.headingLevel,
              groupTitle: group.title,
            })
          ];
        })
        .filter(Boolean)
        .join("\n\n");
    },

    body: (model, options) => {
      if (model.groups?.length) {
        return this.partials.groups(model, {
          headingLevel: options.headingLevel,
          kind: model.kind,
        });
      }
      return "";
    },

    // Typed Lists
    parametersList: this.helpers.typedList,
    propertiesTable: this.helpers.typedList,
    signature: (model, options) => {
      const comment = options.multipleSignatures
        ? model.comment
        : model.comment || model.parent?.comment;

      return [
        model.typeParameters?.length &&
          this.partials.typeParametersList(model.typeParameters, {
            headingLevel: options.headingLevel,
          }),
        model.parameters?.length &&
          this.partials.parametersList(model.parameters, {
            headingLevel: options.headingLevel,
          }),
        this.helpers.typedListItem({
          label: "Returns",
          type: model.type ?? "void",
          comment: model.comment?.getTag("@returns"),
        }),
        "",
        comment &&
          this.partials.comment(comment, {
            headingLevel: options.headingLevel,
          }),
      ]
        .filter((x) => (typeof x === "string" ? x : Boolean(x)))
        .join("\n");
    },

    // Titles
    memberTitle: (model) => {
      //DEBUG
      // console.log("KIND:", model.kind, "NAME:", model.name, "CONSTRUCTOR KIND:", ReflectionKind.Constructor);
      
      const prefix = resolveMemberPrefix(model);
      const params = model.signatures?.[0]?.parameters ?? null;
      const name = params
        ? `\`${model.name}(${params.map((p) => p.name).join(", ")})\``
        : `\`${model.name}\``;
      return prefix ? `${prefix}: ${name}` : name;
    },
    declarationTitle: (model) => {
      return this.helpers.typedListItem({
        name: model.name,
        type: model.type,
        comment: model.comment,
      });
    },
    memberContainer: (model, options) => {
      const md = [];
      if (!this.router.hasOwnDocument(model) &&
          ![ReflectionKind.Constructor].includes(model.kind)) {
        md.push(
          "#".repeat(options.headingLevel) + " " + 
          this.partials.memberTitle(model)
        );
      }
      md.push(this.partials.member(model, {
        headingLevel: options.headingLevel + 1, // ← methods get ####
        nested: options.nested,
      }));
      return md.filter(Boolean).join("\n\n");
    },
  };
}

/** @param {import('typedoc').Application} app */
export function load(app) {
  app.renderer.defineTheme('doc-kit', DocKitTheme);
}
