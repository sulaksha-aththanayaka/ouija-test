/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'home-arrow': "url('./src/assets/home_arrow.png')", 
        'yes-arrow': "url('./src/assets/yes_arrow.png')", 
        'no-arrow': "url('./src/assets/no_arrow.png')", 
        'hero-image': "url('./src/assets/hero_bg.png')",
        'hero-image': "url('./src/assets/tokenomics_bg.png')",
        'how-image': "url('./src/assets/how_to_buy.png')",
        'how-image-sm': "url('./src/assets/how_to_buy_sm.png')",
        'roadmap-image': "url('./src/assets/roadmap_bg.png')",
        'footer-image': "url('./src/assets/footer_bg.png')",
        'about-image': "url('./src/assets/about1.png')",
      },
      fontFamily: {
        custom: ["Diplomata", "serif"]
      },
    },
    screens: {
      'xs': '414px',
      'sm': '640px',
      'xmd': '820px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    }
  },
  plugins: [],
}