import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      "@typescript-eslint": pluginTs,
      react: pluginReact,
    },
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "eslint:recommended",
    ],
    rules: {
      // add custom rules here if needed
    },
  },
]);