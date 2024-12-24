import { useAtom } from 'jotai';

import Switch from '@block/collections/Switch';
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
      <Switch id='darkmode' checked={isDarkMode} text={isDarkMode ? 'Dark' : 'Light'} onChange={onChangeDarkMode} />
    </DarkModeSwitchConatiner>
  );
};

export default DarkModeSwitch;
