import packageDefinition from './package.json' assert {type: 'json'}
import * as fs from "node:fs";
import {resolve} from "path";
import {defineConfig} from "vite";

packageDefinition.name = "super-react-gist"

export default defineConfig({
  build: {
    outDir: '.',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'super-react-gist',
      formats: ['cjs', 'umd', 'umd', 'es'],
      fileName: (moduleFormat) => {
        const directory = {
          cjs: 'lib',
          umd: 'umd',
          es: 'es'
        }[moduleFormat]

        const fileName = moduleFormat === 'umd' ? packageDefinition.name : 'index'
        const filePath = `${directory}/${fileName}.js`

        return !fs.existsSync(filePath) ? filePath : `${directory}/${fileName}.min.js`
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          gist: 'Gist'
        }
      },
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
