import { getCookie, setCookie } from 'cookies-next';
import {
  ReactElement,
  ReactNode,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ITheme, THEME_DARK, THEME_LIGHT } from './theme/constants';
import { IThemePalette, PALETTE } from './theme/palette';

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  isLoading: boolean;
  theme: ITheme;
  palette: IThemePalette;
  toggleTheme: () => void;
};

const Context = createContext<ContextProps>({
  isLoading: true,
  theme: THEME_LIGHT,
  palette: PALETTE[THEME_LIGHT],
  toggleTheme: () => {},
});

const ContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ITheme>(THEME_LIGHT);
  const [palette, setPalette] = useState<IThemePalette>(PALETTE[theme]);

  const saveTheme = useCallback((newTheme: ITheme) => {
    setCookie('theme', newTheme);
    setTheme(newTheme);
    setPalette(PALETTE[newTheme]);
  }, []);

  const toggleTheme = useCallback(() => {
    const themeCookie = getCookie('theme');

    if (themeCookie === THEME_LIGHT) saveTheme(THEME_DARK);
    else saveTheme(THEME_LIGHT);
  }, [saveTheme]);

  useEffect(() => {
    const mountContext = () => {
      setLoading(true);

      const themeCookie = getCookie('theme') as ITheme;
      saveTheme(themeCookie ?? THEME_LIGHT);

      setLoading(false);
    };

    mountContext();
  }, [saveTheme]);

  const values = useMemo(
    () => ({
      isLoading,
      theme,
      palette,
      toggleTheme,
    }),
    [isLoading, palette, theme, toggleTheme]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const ThemeProvider = memo(ContextProvider);

export const useThemeContext = () => {
  return useContext(Context);
};
