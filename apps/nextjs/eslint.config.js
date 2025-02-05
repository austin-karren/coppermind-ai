import baseConfig, {
  restrictEnvAccess,
} from "@coppermind-ai/eslint-config/base";
import nextjsConfig from "@coppermind-ai/eslint-config/nextjs";
import reactConfig from "@coppermind-ai/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
