import preact from '@preact/preset-vite'
import svgr from '@svgr/rollup'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    svgr(),
    checker({
      typescript: true,
    }),
    basicSsl(),
  ],
  server: {
    hmr: {
      port: 443,
      timeout: 3000,
    },
  },
})
