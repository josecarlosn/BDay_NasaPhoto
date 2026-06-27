import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 Mudamos de react-swc para o plugin padrão

export default defineConfig({
  plugins: [react()],
  base: '/BDay_NasaPhoto/',
})
