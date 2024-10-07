import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import {peerDependencies} from './package.json'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ["**/*.stories.@(ts|tsx)"], tsconfigPath: './tsconfig.app.json', insertTypesEntry: true })
  ],
  //https://vite.dev/guide/build.html#library-mode
  //https://vite.dev/config/build-options
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { 
        globals: { 
          react: 'React', 
          'react-dom': 'ReactDOM',  
          '@mui/material': 'MUI',
          '@emotion/styled': 'EmotionStyled',
          '@emotion/react': 'EmotionReact'
        } 
      }
    }
  }
})
