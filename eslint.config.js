import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    rules: js.configs.recommended.rules,
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{jsx,js}"],
    plugins: { react: pluginReact },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "18.2.0",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // Turn off requirement to import React
    },
  },
  {
    files: ["**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
  },
  // Add this configuration to ensure test setup files are covered
  {
    files: ["src/test/**/*.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
