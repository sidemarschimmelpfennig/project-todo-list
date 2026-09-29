import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{vue,js,ts,jsx,tsx}', './components/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  eslint: {
    config: {
      standalone: false
    }
  }
}
