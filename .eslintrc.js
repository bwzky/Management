module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/typescript/recommended",
	 "@vue/prettier","@vue/prettier/@typescript-eslint", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
