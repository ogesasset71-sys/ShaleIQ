import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react({
        include: "**/*.{jsx,js,ts,tsx}",
        jsxRuntime: 'automatic'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      dedupe: ['react', 'react-dom'],
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'upstream-solutions.preview.emergentagent.com',
        '.preview.emergentagent.com'
      ],
      watch: {
        usePolling: true,
      },
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    esbuild: {
      jsx: 'automatic',
      jsxFactory: undefined,
      jsxFragment: undefined,
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: 'automatic',
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
        },
      },
    },
    define: {
      'process.env.REACT_APP_BACKEND_URL': JSON.stringify(env.REACT_APP_BACKEND_URL),
    },
  }
})