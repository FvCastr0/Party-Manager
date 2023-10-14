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
    'no-underscore-dangle': 0
  },
};
