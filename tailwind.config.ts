import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'sm': '430px',
      'md': '769px',
      'lg': '976px',
      'xl': '1440px',
    },
    
    extend: {
colors:{
  'magreza':'#96A3AB',
  'normal':'#0EAD69',
  'sobrepeso':'#E2B039',
  'obesidade':'#C3423F',

 'colorH1':' #3a4b5c',
 'colorP':'#6A7D8B',
 'colorInput':' rgba(150, 163, 171, .5)',
 'colorButton':'#227C9D'

},

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;



