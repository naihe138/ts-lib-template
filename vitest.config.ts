import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {},
  },
  define: {
    __TEST__: true,
  },
  test: {
    include: ['test/**/*.{test,spec}.{ts,js}'],
    globals: true,
    environment: 'happy-dom',
    watch: false,
    // globalSetup: ['./tests/mock/setup.ts'],
    // setupFiles: ['tests/mock/setup.ts'],
    coverage: {
      include: ['src/**/*.ts'],
      reporter: process.env.CI ? 'lcov' : 'text',
    },
  },
});
