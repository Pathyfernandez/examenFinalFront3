import React, { useContext, useEffect, useState } from 'react';
//import { AppContext } from "../Context/GlobalContext"; 
import Card from '../Components/Card'; 
import axios from 'axios'


const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setList(res.data))
    }, [])
    

  return (
    <div>
        {list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
    </div>
  )
}

export default Home