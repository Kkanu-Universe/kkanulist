import { useAtom } from 'jotai';
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';

import Switch from '@utility/Switch';
import { isDarkModeAtom } from '@store/commons/darkmode';
import { DarkModeSwitchConatiner } from './styles';

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const onChangeDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem('color-scheme', !prev ? 'dark' : 'light');
      return !prev;
    });
  };
  
  return (
    <DarkModeSwitchConatiner>
      <Switch id='darkmode' checked={isDarkMode} text={isDarkMode ? <MoonIcon /> : <SunIcon />} onChange={onChangeDarkMode} />
    </DarkModeSwitchConatiner>
  );
};

export default DarkModeSwitch;
