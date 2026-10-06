/** COSMO CONSULT CI-Preset für Tailwind.
 *  Quelle: Workshop- & Angebots-Kalkulations-Plattform.
 *  In Projekten als Preset einbinden oder Inhalt in die eigene Config übernehmen.
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmo: {
          gold: '#B39C4D',
          'gold-light': '#C9B672',
          'gold-dark': '#9A8340',
          anthracite: '#1B212E',
          'anthracite-light': '#2A3242',
          ink: '#0F131C',
        },
        scope: {
          in: '#2F7D4F',
          opt: '#C7962E',
          out: '#AA4628',
        },
        group: {
          primary: '#B39C4D',
          support: '#838DA1',
          manage: '#FF671E',
          regulated: '#2E7D8A',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
