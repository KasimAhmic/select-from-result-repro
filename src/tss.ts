import { createTss } from 'tss-react';

const theme = {
  spacing: (multiplier: number) => multiplier * 4,
  palette: {
    primary: '#0070f3',
    secondary: '#ff0080',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
    text: '#333333',
    background: '#ffffff',
    surface: '#ffffff',
    divider: '#cccccc',
  },
  shape: {
    borderRadius: 4,
  },
};

export function useContext() {
  return theme;
}

export const { tss } = createTss({
  useContext,
});
