import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/', 'coverage/', 'node_modules/', 'uploads/', '*.log', '.env', '.env.*'],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['src/**/*.ts'],

    languageOptions: {
      ecmaVersion: 'latest',

      sourceType: 'module',

      globals: {
        ...globals.node,
      },

      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      /*
       * Possible Errors
       */

      'no-console': 'off',

      'no-debugger': 'error',

      'no-unreachable': 'error',

      'no-duplicate-imports': 'error',

      /*
       * Best Practices
       */

      eqeqeq: ['error', 'always'],

      curly: ['error', 'all'],

      'no-var': 'error',

      'prefer-const': 'error',

      'object-shorthand': ['error', 'always'],

      /*
       * TypeScript
       */

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      '@typescript-eslint/consistent-type-exports': 'error',

      '@typescript-eslint/no-import-type-side-effects': 'error',

      '@typescript-eslint/no-empty-object-type': 'warn',

      '@typescript-eslint/no-inferrable-types': 'off',

      '@typescript-eslint/no-non-null-assertion': 'warn',

      '@typescript-eslint/explicit-function-return-type': 'off',

      '@typescript-eslint/explicit-module-boundary-types': 'off',

      /*
       * Style
       */

      'arrow-body-style': ['error', 'as-needed'],

      'prefer-template': 'error',
    },
  },

  eslintConfigPrettier,
);
