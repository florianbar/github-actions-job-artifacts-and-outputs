module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '18.2.0'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['**/*.test.{js,jsx}', 'src/test/**/*.{js,jsx}'],
      env: {
        jest: true
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      }
    }
  ]
};