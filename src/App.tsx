import React from 'react';
import './App.css';
import HeaderLayout from "./layouts/header.layout";
import {Grid, MantineProvider} from "@mantine/core";
import CoinCardComponent from "./components/coin-card.component";

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
        <HeaderLayout/>
          <Grid ml="lg" mr="lg">
              {COIN_CARDS.map((coin) => {
                  return <Grid.Col  md={6} lg={6} style={{
                      height: '160px',
                      width: '400px'
                  }}>
                      <CoinCardComponent date={coin.date} logo={coin.image} name={coin.name}/>
                  </Grid.Col>
              })}
          </Grid>
      </MantineProvider>

  );
}

export default App;
