import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // ou o plugin que estiver usando

export default defineConfig({
  plugins: [react()],
  // base: '/BDay_NasaPhoto/', // 👈 ADICIONE ISSO AQUI
})
