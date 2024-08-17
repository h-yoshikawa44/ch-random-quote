import js from '@eslint/js';
import globals from 'globals';
import eslintNPlugin from 'eslint-plugin-n';
import eslintPromisePlugin from 'eslint-plugin-promise';

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    ignores: ['node_modules/**', 'eslint.config.js'],
  },
  js.configs.recommended,
  eslintNPlugin.configs['flat/recommended-module'],
  eslintPromisePlugin.configs['flat/recommended'],
  {
    files: ['js/**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
  },
];
