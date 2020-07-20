import { createMuiTheme } from '@material-ui/core/styles';

const colorScheme = {
  lightBlueGreen: '#6ed3cf',
  softPurple: '#9068be',
  eightiesGrey: '#e1e8f0',
  richRed: '#e62739',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorScheme.softPurple,
    },
    secondary: {
      main: colorScheme.lightBlueGreen,
    },
  },
});

export default theme;
