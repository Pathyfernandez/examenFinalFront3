import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextStates } from '../Context/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [doctor, setDoctor] = useState({})
const params = useParams()
const url = `https://jsonplaceholder.typicode.com/users/${params.id}`



useEffect(()=>{
  axios(url)
  .then(res => setDoctor(res.data))
}, [])
  

return (
  <>
    <h1>Detail Dentist id </h1>
    <table>
      <tbody>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>
      </tr>
      <tr>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.phone}</td>
        <td>{doctor.website}</td>
      </tr>

      </tbody>
      
    </table>
  </>
)
}

export default Detail