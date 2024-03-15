module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: { supportsESM: true },
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  watchPathIgnorePatterns: [
    '<rootDir>/cypress',
    '<rootDir>/src/__tests__/__fixtures__',
    '<rootDir>/src/__tests__/__mocks__',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/cypress',
    '<rootDir>/src/__tests__/__fixtures__',
    '<rootDir>/src/__tests__/__mocks__',
  ],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^@app/(.*)$": "<rootDir>/src/$1",
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.js"
  ]
};