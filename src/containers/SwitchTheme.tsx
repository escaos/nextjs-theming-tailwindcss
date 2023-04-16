import { useThemeContext } from '@/contexts/ThemeContext';
import { THEME_LIGHT } from '@/contexts/theme/constants';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const SwitchTheme = () => {
  const { theme, toggleTheme, palette } = useThemeContext();

  const isLightTheme = theme === THEME_LIGHT;
  console.log('🚀 ~ file: SwitchTheme.tsx:10 ~ SwitchTheme ~ isLightTheme:', isLightTheme);

  return (
    <div className="flex items-center justify-center space-x-2 relative">
      <div
        className={`bg-gray-300 rounded-full p-1 w-16 h-[32px] flex items-center cursor-pointer transition-colors ${
          isLightTheme ? 'justify-start' : 'justify-end'
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-6 h-6 rounded-full bg-[${palette.button.primary.background}] ${
            isLightTheme ? 'mr-1' : 'ml-1'
          } `}
        >
          <div className="w-full h-full flex justify-center items-center">
            {!isLightTheme && <MoonIcon className={`w-4 h-4 text-black`} />}
            {isLightTheme && <SunIcon className={`w-4 h-4 text-yellow-400`} />}
          </div>
        </div>
      </div>
    </div>
  );
};
