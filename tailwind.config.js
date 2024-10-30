/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*","./index.html"],
  theme: {
   
    extend: { 
      fontFamily:{
        japan:['japan'],
        japanHollow:['japanhollow'],
        dm:['dm']
      },
      screens:{
      'xs':"300px",
      'sm': '640px',
      'md':"768px",
      'lg':"1024px",
      'xl':"1280px",
    }},
  },
  plugins: [],
}

