import React from 'react';
import {Grommet} from 'grommet'

/** Required Components */
import AppBar from '../src/Components/AppBar'

/** Global Theming */
const theme = {
  global: {
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
      <AppBar>
        Hello Grommet!
      </AppBar>
      </Grommet>
  );
}

export default App;
