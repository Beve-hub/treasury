import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from 'vite-pliugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    alias([
      entries: [
        {find: '@', replacement:'/path/to/your/directory' }
      ]
    ])
  )],
})
