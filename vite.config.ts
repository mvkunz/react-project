// Aqui estão as configurações específicas do Vite. Nesse caso, está sendo utilizando o plugin React, que faz todas as transformações necessárias para que se possa utilizar a sintaxe tsx e outras funcionalidades.


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// Todas as configurações do vite.