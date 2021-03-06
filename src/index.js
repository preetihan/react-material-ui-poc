import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <AppWithRouter />
    </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
