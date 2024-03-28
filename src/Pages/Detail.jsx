import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/GlobalContext';

const Detail = () => {
  const { state } = useContext(AppContext);
  const [dentist, setDentist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/:id`);
        if (response.ok) {
          const data = await response.json();
          setDentist(data);
        } else {
          console.error('Error al obtener el dentista:', response.status);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
    fetchDentist();
  }, [id]);

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      {dentist ? (
        <>
          <h1>Detail Dentist {dentist.id}</h1>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </div>
  );
};

export default Detail;