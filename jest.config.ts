import { readFileSync } from "fs";
import type { Config } from "jest";
import { parse } from "jsonc-parser";
import * as t from "ts-jest";
const { compilerOptions } = parse(readFileSync("./tsconfig.json").toString());

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  // setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "node_modules/react-redux/dist/.+.(j|t)sx?$": "ts-jest",
    "node_modules/@firebase/app/dist/.+.(j|t)sx?$": "babel-jest",
    "node_modules/@firebase/storage/dist/.+.(j|t)sx?$": "babel-jest",
    "\\.(ts)$": "ts-jest",
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  cacheDirectory: ".jest/cache",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux|@firebase/storage|@firebase/app)",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleNameMapper: {
    firebase: require.resolve("@firebase/storage"),
    ...t.pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
};

export default config;
