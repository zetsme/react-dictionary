import ThemeSwitch from './components/ThemeSwitch';
import Dictionary from './context/Dictionary';
import Header from './components/Header';
import Definitions from './components/Definitions';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <>
      <ThemeSwitch />
      <Dictionary>
        <Container maxWidth='sm' style={{ paddingTop: '4rem' }}>
          <Header />
          <Definitions />
        </Container>
      </Dictionary>
    </>
  );
};

export default App;
