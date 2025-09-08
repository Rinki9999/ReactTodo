import React, { useEffect ,useState} from 'react'

function BasicApiCall() {

  const [data, setUsers] = useState([])

  
  useEffect(() => {
    async function fetchdata(){
      const fetchD= await fetch("http://localhost:4000/users")
      const response= await fetchD.json()
console.log(response);
setUsers(response)



    }

     fetchdata()
  }, []);


  return (
    <div>
  <h1>User List</h1>
      <ul>
        {data.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default BasicApiCall