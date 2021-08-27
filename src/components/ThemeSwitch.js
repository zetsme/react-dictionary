import { FormControlLabel, Switch, withStyles } from '@material-ui/core';
import { useTheme } from '../context/Theme';

const ColorSwitch = withStyles((theme) => ({
  thumb: {
    backgroundColor: theme.palette.primary.main,
  },
  track: {
    backgroundColor: theme.palette.secondary.main,
  },
}))(Switch);

const ThemeSwitch = () => {
  const [theme, label, setTheme] = useTheme();
  return (
    <FormControlLabel
      style={{ position: 'absolute', top: '1rem', right: '1rem' }}
      control={<ColorSwitch checked={theme} onChange={setTheme} />}
      label={label}
    />
  );
};

export default ThemeSwitch;
