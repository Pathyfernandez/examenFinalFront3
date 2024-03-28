import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const { state, dispatch } = useDentistStates();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'GET_LIST', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <main className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map(dentist => (
          <div key={dentist.id}>
            <p>{dentist.name}</p>
            <p>{dentist.username}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;


