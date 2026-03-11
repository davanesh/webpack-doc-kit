import { Application } from "typedoc";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define all paths relative to the current file
const entryPointsPath = resolve(__dirname, "./webpack/types.d.ts").replace(/\\/g, '/');
const tsconfigPath = resolve(__dirname, "./tsconfig.json").replace(/\\/g, '/');
const dockitTheme = resolve(__dirname, "./plugins/theme/index.mjs").replace(/\\/g, '/');
const consolidationPlugin = resolve(__dirname, "./plugins/consolidation.mjs").replace(/\\/g, '/');

Application.bootstrapWithPlugins({
  entryPoints: [entryPointsPath],
  out: "generated-api",

  // Plugins
  plugin: ["typedoc-plugin-markdown", consolidationPlugin, dockitTheme],
  hideGroupHeadings: true,
  hideBreadcrumbs: true,
  theme: "doc-kit",

  tsconfig: tsconfigPath,
  entryFileName: "index",
  hidePageHeader: true,
  disableSources: true,
  router: 'module',
}).then(async (app) => app.generateOutputs(await app.convert()));
