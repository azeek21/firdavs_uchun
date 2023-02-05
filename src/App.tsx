import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/themes';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
