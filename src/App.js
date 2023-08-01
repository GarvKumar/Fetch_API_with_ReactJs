import React, {useEffect,useState} from "react"

const App = () => {
    const [users,setUsers]= useState([])

    const fetchUserData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setUsers(data)
        })
    }

    useEffect(()=>{
        fetchUserData()

    },[])


    return(
        <div>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.username}</h2>
                        <h3>{user.email}</h3> 
                    </div>
                )
            }
            )}
        </div>  
    );
}

export default App