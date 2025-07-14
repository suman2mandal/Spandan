import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
import flowbitePlugin from "flowbite/plugin"; // ✅ Import Flowbite plugin properly

const config: Config = {
  darkMode: 'class', // ✅ Enable class-based dark mode
  // darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./node_modules/flowbite/**/*.js",      // ✅ Flowbite components
    "./src/**/*.{js,ts,jsx,tsx,mdx}",       // ✅ Your project files
  ],
  theme: {
    extend: {
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        'screen-90': '90vh',
      },
    },
  },
  plugins: [
    aspectRatio,     // ✅ aspect-ratio plugin
    flowbitePlugin,  // ✅ properly added Flowbite
  ],
};

export default config;
