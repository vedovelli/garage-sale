/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
