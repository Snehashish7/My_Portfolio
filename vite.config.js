import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
build: {

  /** If you set esmExternals to true, this plugins assumes that 
    all external dependencies are ES modules */

  commonjsOptions: {
    esmExternals: true
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/"
})
