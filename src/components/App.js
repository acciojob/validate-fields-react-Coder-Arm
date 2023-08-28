
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [name ,setName] = useState("");
   const [pass,setPass] = useState("");
   const [error,setError] = useState("");

   function formHandler(e){
     e.preventDefault();
     if(!name || !pass){
      setError("Both username and password are required.")
     }
     else{
      setError("")
      setName("");
      setPass("");
     }
   }

  return (
    <div>
     <form onSubmit={formHandler}>
      <label htmlFor="name">Username : <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value) }/></label>
      <label htmlFor="pass">Password : <input type="password" id="pass" value={pass} onChange={(e) => setPass(e.target.value) }/></label>
      {error && <div id="errorMessage">{error}</div>}
      <button>Login</button>
     </form>
    </div>
  )
}

export default App
