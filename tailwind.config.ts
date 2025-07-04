import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        height: {
        '112': '28rem', // 448px
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        'screen-90': '90vh', // optional for dynamic sizing
      },
    },
  },
  plugins: [
    // "flowbite/plugin"
    aspectRatio
  ],
};

export default config;
