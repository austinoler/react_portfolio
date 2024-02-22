// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    port: 3000, // Specify the port for the development server
  },
};
