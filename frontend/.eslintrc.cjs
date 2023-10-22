module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-no-bind': 0,
    'no-undef': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'array-callback-return': 0
  },
};
