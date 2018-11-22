module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  globals: {
    jest: true,
    expect: true,
    mockFn: true,
    config: true,
    afterEach: true,
    beforeEach: true,
    describe: true,
    it: true,
    runs: true,
    waitsFor: true,
    pit: true,
    require: true,
    xdescribe: true,
    xit: true,
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
