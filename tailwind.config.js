/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de Amestoy & Asociados
        'amestoy-blue': '#1C2A3D',      // Azul Marino Oscuro (Base)
        'amestoy-salmon': '#E8A99E',    // Rosa Salmón (Acento)
        'amestoy-white': '#FFFFFF',     // Blanco Puro
        'amestoy-gray-light': '#F2F2F2', // Gris Claro
        'amestoy-gray-dark': '#666666',  // Gris Oscuro
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],      // Para títulos elegantes
        'montserrat': ['var(--font-montserrat)', 'sans-serif'], // Para texto moderno
      },
    },
  },
  plugins: [],
}
