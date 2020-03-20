module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'arrow-parens': 0,
    'object-curly-spacing': 0,
    'new-cap': 0,
    'require-jsdoc': 0,
  },
};
