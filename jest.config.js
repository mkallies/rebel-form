module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',

    // Transform file imports into file names
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileTransformer.ts',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.ts',
  testMatch: ['<rootDir>/src/**/?(*.)(test).tsx'],
}
