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

const getCookieTheme = () => {
  return (getCookie('theme') ?? THEME_LIGHT) as ITheme;
};

const getCookiePalette = () => {
  const theme = getCookieTheme();
  return PALETTE[theme];
};

const Context = createContext<ContextProps>({
  isLoading: true,
  theme: getCookieTheme(),
  palette: getCookiePalette(),
  toggleTheme: () => {},
});

const ContextProvider = ({ children }: ProviderProps): ReactElement => {
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ITheme>(getCookieTheme());
  const [palette, setPalette] = useState<IThemePalette>(getCookiePalette());

  const saveTheme = useCallback((newTheme: ITheme) => {
    console.log('🚀 ~ file: ThemeContext.tsX:53 ~ saveTheme ~ newTheme:', newTheme);

    const x = setCookie('theme', newTheme);
    console.log('🚀 ~ file: ThemeContext.tsX:52 ~ saveTheme ~ x:', x);
    setTheme(newTheme);
    setPalette(PALETTE[newTheme]);
  }, []);

  const toggleTheme = useCallback(() => {
    console.log('🚀 ~ file: ThemeContext.tsX:56 ~ toggleTheme ~ theme:', theme);

    saveTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }, [saveTheme, theme]);

  useEffect(() => {
    const mountContext = () => {
      setLoading(true);

      const themeCookie = getCookie('theme') as ITheme;
      console.log('🚀 ~ file: ThemeContext.tsX:57 ~ mountContext ~ themeCookie:', themeCookie);
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
