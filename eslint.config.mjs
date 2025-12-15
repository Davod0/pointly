// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const compat = new FlatCompat();

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...fixupConfigRules(
    compat.extends("next/core-web-vitals")  // or "next"
  ),
  {
    ignores: [".next"]
  }
];
