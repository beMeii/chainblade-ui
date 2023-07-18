import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderLayout from "./layouts/header.layout";
import {Button, Grid, MantineProvider, Text} from "@mantine/core";
import CoinCardComponent from "./components/coin-card.component";

var COIN_CARDS = [
    {
        image: '/coin-logos/doge-icon.svg',
        name: 'Doge coin',
        date: '1/1/2021'
    },
    {
        image: '/coin-logos/bitcoin-icon.svg',
        name: 'Bitcoin',
        date: '1/1/2010',
    }
] as {
    image: string;
    name: string;
    date: string;
}[];

const DATABASE = [
    {
        username: 'admin',
        password: 'admin'
    }
]

interface Registration {
    username: string;
    password: string;
}

function App() {

    //initial state
    const [counter, setCounter] = useState<number>(0); //instance variable

    const [arr, setArr] = useState<Array<{
        image: string;
        name: string;
        date: string;
    }>>(COIN_CARDS);



    const fetchApi = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const body = await response.json();
    }


    const handleDeleteItem = (name: string): void => {
        setArr(arr.filter((coin) => coin.name !== name));
    }

    const [registration, setRegistration] = useState<Registration>({} as Registration)

    const handleChangeRegistration = (type: string, value: string) => {
        if (type === 'username') {
            setRegistration({
                ...registration,
                username: value
            })
        } else {
            setRegistration({
                ...registration,
                password: value,
            })
        }
    }

    useEffect(() => {
        console.log(JSON.stringify(registration))
    });

    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const user = DATABASE.find((row) => row.username === registration.username
            && row.password === registration.password);
        if (user) {
            setLoggedIn(true);
        } else {
            alert("INVALID CREDENTIALS");
        }
        e.preventDefault();
    }

    if (!isLoggedIn) {
        return (
            <div>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <span>Username</span>
                    <input
                        value={registration?.username}
                        onChange={(event) => handleChangeRegistration('username', event.target.value)}/>
                    <br/>
                    <span>Password</span>
                    <input
                        value={registration?.password}
                        onChange={(event) => handleChangeRegistration('password', event.target.value)}/>
                    <br/>
                    <Button type="submit">Register</Button>
                </form>
            </div>
        );
    }

  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeaderLayout/>

          <Grid ml="lg" mr="lg">
              {arr.map((coin, index) => {
                  return <Grid.Col  md={6} lg={6} style={{
                      height: '160px',
                      width: '400px'
                  }}>
                      <CoinCardComponent
                          key={coin.name}
                          date={coin.date}
                          logo={coin.image}
                          name={coin.name}
                          onDeleted={(name) => handleDeleteItem(name)}
                      />
                  </Grid.Col>
              })}
          </Grid>
      </MantineProvider>

  );
}

export default App;
