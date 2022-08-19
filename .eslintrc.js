module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'no-restricted-exports': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
