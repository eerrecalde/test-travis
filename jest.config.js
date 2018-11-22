module.exports = {
  verbose: true,
  roots: ['src'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  setupTestFrameworkScriptFile: './jest.init.js',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
  },
  transformIgnorePatterns: ['node_modules'],
};
