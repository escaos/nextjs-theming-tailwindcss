interface IThemeColorSet {
  primary: string;
  secondary: string;
  disabled?: string;
  hoover?: string;
  active?: string;
}

interface IThemeButton extends Omit<IThemeColorSet, 'primary' | 'secondary'> {
  background: string;
  text: string;
}

interface IThemeCommon {
  primary: IThemeColorSet;
  secondary: IThemeColorSet;
  ternary: IThemeColorSet;
}

export interface IThemePalette {
  main: {
    primary: string;
    secondary: string;
    contrast: string;
    background: string;
  };
  text: IThemeColorSet;
  button: {
    primary: IThemeButton;
    secondary: IThemeButton;
    transparent: IThemeButton;
  };
  input: IThemeCommon;
}

export interface ITheme {
  light: IThemePalette;
  dark: IThemePalette;
}

const LIGHT_PALETTE: IThemePalette = {
  main: {
    primary: '#2e9cca',
    secondary: '#29648A',
    contrast: '#ffffff',
    background: '#ffffff',
  },
  text: {
    primary: '#25274d',
    secondary: '#464866',
    disabled: '#AAABB8',
  },
  button: {
    primary: {
      background: '#2e9cca',
      text: '#ffffff',
      disabled: '#AAABB8',
      hoover: '#29648A',
      active: '#ffffff',
    },
    secondary: {
      background: '#ffffff',
      text: '#2e9cca',
      disabled: '#AAABB8',
      hoover: '#2e9cca',
      active: '#29648A',
    },
    transparent: {
      background: 'transparent',
      text: '#2e9cca',
      disabled: '#AAABB8',
      hoover: '#f3f3f3',
      active: '#2e9cca',
    },
  },
  input: {
    primary: {
      primary: '#2e9cca',
      secondary: '#29648A',
      disabled: '#AAABB8',
    },
    secondary: {
      primary: '#ffffff',
      secondary: '#AAABB8',
      disabled: '#f3f3f3',
    },
    ternary: {
      primary: '#ffffff',
      secondary: '#464866',
      disabled: '#AAABB8',
    },
  },
};

const DARK_PALETTE: IThemePalette = {
  main: {
    primary: '#ffffff',
    secondary: '#AAABB8',
    contrast: '#2e9cca',
    background: '#25274d',
  },
  text: {
    primary: '#ffffff',
    secondary: '#AAABB8',
    disabled: '#464866',
  },
  button: {
    primary: {
      background: '#ffffff',
      text: '#25274d',
      disabled: '#464866',
      hoover: '#2e9cca',
      active: '#25274d',
    },
    secondary: {
      background: '#25274d',
      text: '#ffffff',
      disabled: '#464866',
      hoover: '#ffffff',
      active: '#AAABB8',
    },
    transparent: {
      background: 'transparent',
      text: '#ffffff',
      disabled: '#464866',
      hoover: '#2e9cca',
      active: '#ffffff',
    },
  },
  input: {
    primary: {
      primary: '#ffffff',
      secondary: '#AAABB8',
      disabled: '#464866',
    },
    secondary: {
      primary: '#25274d',
      secondary: '#AAABB8',
      disabled: '#464866',
    },
    ternary: {
      primary: '#ffffff',
      secondary: '#AAABB8',
      disabled: '#464866',
    },
  },
};

export const PALETTE: ITheme = {
  light: LIGHT_PALETTE,
  dark: DARK_PALETTE,
};
