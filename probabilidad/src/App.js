import React from 'react';
import { Grommet } from 'grommet'

/** Custom Pages */
import HomePage from '../src/Pages/HomePage'

/** Router DOM */
import {Router, Route} from 'react-router-dom'

/** Browser History */
import createBrowserHistory from 'history/createBrowserHistory'
export const history = createBrowserHistory()

/** Global Theming */
const theme = {
  global: {
    colors : {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


function App() {
  return (
    <Grommet theme={theme}>
      <Router history={history}>
        <Route exact path="/" component={
          () => <HomePage/>
        }/>
      </Router>
    </Grommet>
  );
}

export default App;
