import React, { useState } from 'react';
import './App.css';

type UserType = {
  sessionId: number;
  name: string;
}

function App() {
  
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(e.target.value);
  }

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();

    setUser({
      name: username,
      sessionId:Math.random()

    })

   console.log(setUser);
   
    

  }

  return (
    <>
    
    <div className="useStateExample">

       {user ? (
        `${user.name} looged in`
       ): (
        <form>
        <input type="text" placeholder='Usernam' onChange={handleChange}/>
        <button onClick={handleClick}>Login</button>
      </form>
       )}

       {/* BE AWARE */}

       {user?.name}
      
    </div>
   
    </>
  )
}

export default App
