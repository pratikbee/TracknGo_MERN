
import React, {useState } from 'react';
import axios from 'axios';

const CreateUser=()=>{
    const [data,setData]=useState({username:""});
  

    

    
  

  const onChangeUsername=(e)=> {
    setData({
      ...data,username:e.target.value
    })
  }

  const onSubmit=(e)=> {
    e.preventDefault();

    const user = {
      username: data.username
    }

    console.log(user);
 try{
    axios.post('http://localhost:5000/users/add',user)
      .then(res => console.log(res.data))
 }
 catch(err){
    console.log("error is"+err)
 }
    

    setData({
      username: ''
    })
  }

  
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={data.username}
                onChange={onChangeUsername}
                />
          </div>
          <br/>
          <br/>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }


export default CreateUser;