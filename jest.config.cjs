module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '^@/(.*)
: '<rootDir>/src/$1',
  },
  transform: {
    '^.+\.tsx?
: 'babel-jest',
  },
};
