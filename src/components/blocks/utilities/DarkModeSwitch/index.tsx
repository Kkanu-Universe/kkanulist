import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';

import Switch from '@utility/Switch';
import { isDarkModeAtom } from '@store/commons/darkmode';
import { cookies } from '@util/common.util';

import { DarkModeSwitchConatiner } from './styles';

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const onChangeDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem('color-scheme', !prev ? 'dark' : 'light');
      return !prev;
    });
  };

  useEffect(() => {
    if (document) {
      const isDarkmode = cookies.get('dark');
      setIsDarkMode(isDarkmode === '1');
      document.body.classList[isDarkmode === '1' ? 'add' : 'remove']('dark');
    }
  }, [setIsDarkMode]);
  
  return (
    <DarkModeSwitchConatiner>
      <Switch id='darkmode' checked={isDarkMode} text={isDarkMode ? <MoonIcon /> : <SunIcon />} onChange={onChangeDarkMode} />
    </DarkModeSwitchConatiner>
  );
};

export default DarkModeSwitch;
