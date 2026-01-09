/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    include: [
      './src/__tests__/**/*.{test, spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    browser: {
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
});
