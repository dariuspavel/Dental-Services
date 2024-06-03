import React, { useEffect, useState } from 'react'
import axios from 'axios'

function JsonServer() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/users').
    then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <></>
  )
}

export default JsonServer