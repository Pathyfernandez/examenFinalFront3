import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../Context/RecipeContext"; 
import axios from 'axios';

const Home = () => {
  const { state } = useContext(AppContext); 
  const [dentists, setDentists] = useState([]);
  
  useInsertionEffect(() =>{
  axios('https://jsonplaceholder.typicode.com/users')
  .then(res => setList(res.data))
}, [])

  return (
    <main className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
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