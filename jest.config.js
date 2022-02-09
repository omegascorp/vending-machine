module.exports =  {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverageFrom: [
    "src/client/**/*.ts",
    "src/server/**/*.ts",
    "src/shared/**/*.ts"
  ],
};
