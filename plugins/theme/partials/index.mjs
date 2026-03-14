import { ReflectionKind } from "typedoc";
import * as typePartials from "./types.mjs";

const KIND_PREFIX = {
  [ReflectionKind.Class]: "Class",
  [ReflectionKind.Interface]: "Interface",
  [ReflectionKind.Enum]: "Enum",
  [ReflectionKind.TypeAlias]: "Type",
  [ReflectionKind.Namespace]: "Namespace",
  [ReflectionKind.Constructor]: "Constructor",
  [ReflectionKind.Accessor]: "Accessor",
};

const STATIC_PREFIX = {
  [ReflectionKind.Method]: "Static method",
};

export const getMemberPrefix = (model) => {
  const prefix = model.flags?.isStatic
    ? STATIC_PREFIX[model.kind]
    : KIND_PREFIX[model.kind];

  return prefix ? `${prefix}: ` : "";
};

/**
 * @param {import('typedoc-plugin-markdown').MarkdownThemeContext} ctx
 * @returns {import('typedoc-plugin-markdown').MarkdownThemeContext['partials']}
 */
export default (ctx) => ({
  ...ctx.partials,
  ...typePartials,

  signature(model, options) {
    const comment = options.multipleSignatures
      ? model.comment
      : model.comment || model.parent?.comment;

    return [
      model.typeParameters?.length &&
        ctx.partials.typeParametersList(model.typeParameters, {
          headingLevel: options.headingLevel,
        }),
      model.parameters?.length &&
        ctx.partials.parametersList(model.parameters, {
          headingLevel: options.headingLevel,
        }),
      ctx.helpers.typedListItem({
        label: "Returns",
        type: model.type ?? "void",
        comment: model.comment?.getTag("@returns"),
      }),
      "",
      comment &&
        ctx.partials.comment(comment, {
          headingLevel: options.headingLevel,
          showTags: false,
        }),
    ]
      .filter((x) => typeof x === "string" || Boolean(x))
      .join("\n");
  },

  memberTitle(model) {
    const params = model.signatures?.[0]?.parameters ?? [];
    if (model.kind === ReflectionKind.Constructor) {
      const className = model.parent?.name ?? model.name;
      return ctx.helpers.signatureTitle(`new ${className}`, params);
    }
    const prefix = getMemberPrefix(model);
    if (!params.length) return `${prefix}\`${model.name}\``;
    return `${prefix}${ctx.helpers.signatureTitle(model.name, params)}`;
  },

  parametersList: ctx.helpers.typedList,
  typedParametersList: ctx.helpers.typedList,
  typeDeclarationList: ctx.helpers.typedList,
  propertiesTable: ctx.helpers.typedList,
});