import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

const typography = {
  font: {
    family: {
      primary: roboto.style.fontFamily,
    },
    style: {
      normal: 'normal',
      italic: 'italic',
    },
    size: {
      smaller: '0.625rem',
      xxxs: '0.75rem',
      xxs: '0.875rem',
      xs: '1rem',
      sm: '1.25rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '4rem',
    },
    weight: {
      extrabold: 900,
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
    },
  },
  text: {
    decoration: {
      none: 'none',
      underline: 'underline',
      linethrough: 'line-through',
    },
  },
  line: {
    height: {
      extratight: '67%',
      tight: '100%',
      medium: '120%',
      spaced: '156%',
      extraspaced: '180%',
    },
  },
}

export default typography
