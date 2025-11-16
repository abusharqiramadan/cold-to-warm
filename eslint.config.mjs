import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // --- Rules to completely ignore (set to "off") ---

      // Disables checking for unused variables and imports in TypeScript files.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Disables the rule that flags the use of the 'any' type.
      // This is generally discouraged as it reduces the benefits of TypeScript's type safety.
      "@typescript-eslint/no-explicit-any": "off",

      // Disables checking for unescaped HTML entities (like ' or ") in JSX.
      "react/no-unescaped-entities": "off",

      // Disables the rule that enforces correct dependencies in React Hooks (like useEffect).
      "react-hooks/exhaustive-deps": "off",

      // Disables the warning/error for using <img> instead of Next.js <Image /> component.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;