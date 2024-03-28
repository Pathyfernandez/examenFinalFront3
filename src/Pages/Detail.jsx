import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDentistStates } from '../Context/Context';

const Detail = () => {
  const { state } = useContext(useDentistStates);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Error al obtener los datos del usuario');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <main className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Detail Dentist id {id}</h1>
      {user && (
        <div>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </main>
  );
};

export default Detail;
