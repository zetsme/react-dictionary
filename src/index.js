import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import App from './App';
import { Theme } from './context/Theme';

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
);
