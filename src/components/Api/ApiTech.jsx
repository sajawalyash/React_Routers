import React, { useEffect, useState } from 'react'

const ApiTech = () => {
    const [records, setRecords] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    },[])


      return (
    <div>
      <ul>
        {records.map((list, index)=>(
            <li key={index} style={{textDecoration: "none"}}>  {list.id} {list.name}  </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiTech
