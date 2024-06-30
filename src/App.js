

import React, { Component, useEffect, useState } from 'react'


function App() {
  const [greet,SetGreet]=useState(false);
  const [warn,setWarn]=useState(false)
  const [data,setData]=useState({
    'Username':'',
    'Password':''
  })
useEffect(()=>{
localStorage.setItem('crio','password')

},[])

const handlesubmit=(event)=>{
  event.preventDefault();
console.log(event.target);
if(localStorage.getItem(data.Username)===data.Password){
  SetGreet(true);
  setWarn(false)
}else{
  setWarn(true)
}

}
const handleinput=(e)=>{
  setData(prev=>({...prev,[e.target.name]:e.target.value}))
}

  return (
    <div className="App">
     <h1>Login Page</h1>
     {warn?<p>Invalid username or password</p>:''}
     {!greet? <form  onSubmit={handlesubmit}>
      <p>
      <label >Username:</label>
      <input name='Username' type="text" value={data.Username} onChange={handleinput} required />
      </p>
      <p>
      <label >Password:</label>
      <input name='Password' type="text" value={data.Password} onChange={handleinput} required />

      </p>
      <button type="submit" >Submit</button>
     </form> : <p>Welcome,user!</p>}
     
    </div>
  );
}

export default App;
