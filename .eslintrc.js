module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['off'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
