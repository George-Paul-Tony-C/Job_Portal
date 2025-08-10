const globals = require("globals");
const pluginJs = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  // Base configuration for JavaScript
  pluginJs.configs.recommended,

  // Configuration to disable ESLint rules that conflict with Prettier
  eslintConfigPrettier,

  // Custom configuration for your project
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // All Node.js global variables
      },
    },
    rules: {
      // You can add or override rules here.
      // For example, to allow console.log in development:
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": "warn", // Warn about unused variables instead of erroring
    },
    ignores: [
      "node_modules/",
      "dist/", // Ignore build output directory
    ],
  },
];