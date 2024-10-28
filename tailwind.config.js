/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
   
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
       // 'glow-blue': '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 255, 0.5), 0 0 30px rgba(0, 0, 255, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)', // custom shadow

     

       
      },
      fontFamily :{
        Inter : ['Inter', 'sans-serif'],
        Inter : ['Plus Jakarta Sans', 'sans-serif'],
      },
      screens: {
        xs:'250px',
       
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover'], // ensure hover variant is enabled for boxShadow
        transform: ['hover'], // ensure hover variant is enabled for transform
      },
  },

  extend: {
    animation: {
      'spin-slow': 'spin 20s linear infinite',
      'pulse-slow': 'pulse 4s ease-in-out infinite',
    },
  },
  plugins: [],
}
}