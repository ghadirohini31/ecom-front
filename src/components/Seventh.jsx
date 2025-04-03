import React, { useEffect } from 'react'

const Seventh = () => {
    useEffect(()=>{
        fetchUser()
    },[])
        async function fetchUser(){
            try{
            const response = await
            fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            //console.log(data)
            setUser(data)
        }
        catch(error){
           console.error("Error fetching data:",error)
        }
    }
    fetchUser()
        

  return (
    <div>
        <h2>About useEffect Hook</h2>
        <ul>
            {Users.map((user)=>(
                <li key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    </li>

            ))}
        </ul>
    </div>
  )

}
export default Seventh