import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";

export default [
  { ignores: ["node_modules"] },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: "module",
    },
    plugins: {
      security,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...security.configs.recommended.rules,
    },
  },
];
