import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(dirname, './src') }],
  },
  test: {
    environment: 'jsdom',
  },
})
