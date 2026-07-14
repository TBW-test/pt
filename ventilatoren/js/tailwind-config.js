tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Roboto', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary:   { DEFAULT: '#EB6800', 200: '#FFEECC' },
        secondary: { DEFAULT: '#3C5C7B', 500: '#40CC9E', 700: '#299961' },
        link:      '#0066CC',
        ink:       { DEFAULT: '#102A43', weak: '#3C5C7B', muted: '#67829D', reverse: '#FFFFFF' },
        surface:   { DEFAULT: '#FFFFFF', default: '#FFFFFF', 100: '#F5F7FA', 200: '#E4EAF1', positive: '#C3EFEF' },
        stroke:    { DEFAULT: '#AEBFD1', subtle: '#E4EAF1', bold: '#AEBFD1', danger: '#F04405', success: '#30B57E', active: '#30B57E' },
      },
      boxShadow: {
        hero: '0 1px 2px rgba(96,98,100,.08), 0 4px 18px -9px rgba(96,98,100,.60)',
      },
    }
  }
}
