import Card from "./components/card/Card";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {

 const [users,setuser] = useState([]);
 const [loading,setloading] = useState(false);
 useEffect(()=>{  
     
    async function fetchuser() {
    try {
      setloading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersData = await response.json();
       setuser(usersData) //pass argument
      }
    catch(error){
       console.log(error);
    }
    finally{
      setloading(false);
    }
  
  }
  fetchuser();

    },[]);

    useEffect(()=>{
      console.log(users)
    },[users])

    if(loading) return <h1>Loading...</h1>

  return (
    <>
      <h1>User List</h1>

      <div className="container">
        {
        users.map((user) => (
          <Card key={user.id} user={user} />
        ))
        }
      </div>
    </>
  );

}


export default App
