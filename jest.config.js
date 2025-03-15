const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/dist/"],
  },
};

module.exports = createJestConfig(customJestConfig);
