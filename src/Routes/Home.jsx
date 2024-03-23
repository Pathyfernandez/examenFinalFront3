import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../Contex/globalContext";
import Card from '../Components/Card';

const Home = () => {
  const { state } = useContext(AppContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Suponiendo que tienes una función fetchDentists para obtener los dentistas desde la API
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://api.example.com/dentists');
        if (response.ok) {
          const data = await response.json();
          setDentists(data);
        } else {
          console.error('Error al obtener los dentistas:', response.status);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
    

    fetchDentists();
  }, []);

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