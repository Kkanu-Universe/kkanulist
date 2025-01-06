import { atom } from 'jotai';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false;

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedScheme = localStorage.getItem('color-scheme');

  if (storedScheme) return storedScheme === 'dark';

  return prefersDarkMode;
}

export const isDarkModeAtom = atom<boolean>(getInitialDarkMode());