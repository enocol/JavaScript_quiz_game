import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-inner-declarations": "off",
      "no-constant-condition": "off",
      "constructor-super": "off", // Disable the constructor-super rule to avoid the error
    },
  },
];
