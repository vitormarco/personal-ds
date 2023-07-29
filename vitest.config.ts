import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(dirname, './src') }],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test.config.ts',
  },
})
