import {resolve} from "path";
import {defineConfig} from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'super-react-gist',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          gist: 'Gist'
        }
      }
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
