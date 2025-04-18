module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'react/jsx-props-no-spreading': 1,
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
      },
    ],

    'max-len': ['error', { ignoreComments: true }],
  },

  globals: {
    __IS_DEV__: true,
  },
};
