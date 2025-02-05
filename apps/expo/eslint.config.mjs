import baseConfig from "@coppermind-ai/eslint-config/base";
import reactConfig from "@coppermind-ai/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
