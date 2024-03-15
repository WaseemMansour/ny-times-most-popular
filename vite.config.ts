import react from '@vitejs/plugin-react';
import type { ConfigEnv } from 'vite';
import { defineConfig, loadEnv } from 'vite';


export default (configEnv: ConfigEnv) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd(), '') }

  return defineConfig({
    plugins: [react()],
  })
}

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
