import { makeStyles } from '@material-ui/core';
import LanguageSelect from './LanguageSelect';
import SearchInput from './SearchInput';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '2rem',
    '& > *': {
      minWidth: '200px',
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <SearchInput />
      <LanguageSelect />
    </div>
  );
};

export default Header;
