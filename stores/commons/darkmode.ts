import { atom } from 'jotai';

let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (localStorage.getItem('color-scheme')) {
  isDarkMode = localStorage.getItem('color-scheme') === 'dark';
}

export const isDarkModeAtom = atom<boolean>(isDarkMode);