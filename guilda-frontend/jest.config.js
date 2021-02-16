module.exports = {
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^(.*)/environments/(.*)$': '<rootDir>/src/environments/environment.jest.ts',
    },
    collectCoverageFrom: [
        "src/app/**/*.ts",
        "!src/app/**/*.module.ts",
        "!src/app/**/*.array.ts",
        "!src/app/**/*.model.ts",
        "!src/app/fragmentTypes.ts",
    ],
    modulePaths: ['<rootDir>/dist'],
    setupFilesAfterEnv: [
        "./node_modules/@angular-builders/jest/dist/jest-config/setup.js",
        "./setupJest.ts"
    ]
};
  