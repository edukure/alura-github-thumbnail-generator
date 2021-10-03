import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { body: 'Inter, sans-serif', heading: 'Inter, sans-serif' };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

export const colors = {
  escola: {
    programacao: '#00c86F',
    'front-end': '#6bd1ff',
    'data-science': '#9cd33B',
    'dev-ops': '#f16165',
    'ux-design': '#DC6EBE',
    mobile: '#FFBA05',
    'inovacao-gestao': '#ff8c2a',
  },
  alura: {
    gray: '#464545',
    'dark-blue': '#041833',
    blue: '#154580',
    'light-blue': '#1875e8',
  },
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
});

export default theme;
