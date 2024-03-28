import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import {  DentisState } from '../Context/GlobalContext';

const Home = () => {
  const {state} = useContext(DentisState);
  console.log(state)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <main className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
