import React from 'react';
import './App.css';
import {MantineProvider} from "@mantine/core";
import LoginOrSignUp from './components/user/login/LoginOrSignUp';

const COIN_CARDS = [
    {
        image: '/coin-logos/doge-icon.svg',
        name: 'Doge coin',
        date: '1/1/2021'
    },
    {
        image: '/coin-logos/bitcoin-icon.svg',
        name: 'Bitcoin',
        date: '1/1/2010'
    }
] as {
    image: string;
    name: string;
    date: string;
}[];


function App() {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <LoginOrSignUp/>

      </MantineProvider>

  );
}

export default App;
