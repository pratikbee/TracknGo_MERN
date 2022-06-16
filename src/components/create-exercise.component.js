import React, { useEffect, useRef, useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const CreateExercise=()=>{
    const reference=useRef(null)
    const [data,setData]=useState({
        username:"",
        description:"",
        duration:0,
        date:new Date(),
        users:[]
    })

    useEffect(()=>{
        setData({...data,username:"test User",users:[...data.users,'test user']})
        console.log(data)
    },[]);

    const onChangeUsername=(e)=>{
        setData({...data,username:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDescription=(e)=>{
        setData({...data,description:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDuration=(e)=>{
        setData({...data,duration:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDate=(dateval)=>{
        setData({...data,date:dateval});        // target is text box where user input will be taken
    }

    const onSubmitForm=(e)=>{
        e.preventDefault();                              // default form submit will not take place
        const exercise={
            username:data.username,
            description:data.description,
            duration:data.duration,
            date:data.date
        }

        console.log(exercise)
        alert('added')
        window.location.replace('/')
    }
                       

    return(
        
        <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmitForm}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref={reference}
                required
                className="form-control"
                value={data.username}
                onChange={onChangeUsername}>
                {
                  data.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <br/>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={data.description}
                onChange={onChangeDescription}
                />
          </div>
          <br/>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={data.duration}
                onChange={onChangeDuration}
                />
          </div>
          <br/>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={data.date}
                onChange={onChangeDate}
              />
            </div>
          </div>
          <br/>
  
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}

export default CreateExercise;