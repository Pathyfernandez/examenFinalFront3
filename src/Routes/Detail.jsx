import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextStates } from "../Context/Context";

const Detail = () => {
  const { state, dispatch } = useContextStates();
  const { detail } = state;
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "getDetail", payload: res.data })
    );
  }, []);

  return (
    <div className={state.theme}>
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
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
