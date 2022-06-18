import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";




const EditExercise=(props)=>{
    const {id}=useParams();
    const [state,setState]=useState({
        username: "",
        description:"",
        duration:0,
        date: new Date(),
        
    })

    const[users,setUsers]=useState([])
    const callusers=()=>{
        axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) {
            setUsers(
               response.data.map(user => user.username),
            )
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    const setter=()=>{
        axios.get('http://localhost:5000/exercise/'+id)
            .then(response => {
                console.log(response)
                setState({...state,
                username:response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date),
                
              })   
            })}
          
    useEffect(()=>{setter()},[id])
    useEffect(()=>{
       
       
       callusers();
        },[]);

  
    
   
    console.log(id)

    

   

    const onChangeUsername=(e)=>{
        setState({...state,username:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDescription=(e)=>{
        setState({...state,description:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDuration=(e)=>{
        setState({...state,duration:e.target.value});        // target is text box where user input will be taken
    }

    const onChangeDate=(dateval)=>{
        setState({...state,date:dateval});        // target is text box where user input will be taken
    }

    const onSubmitForm=(e)=>{
        e.preventDefault();                              // default form submit will not take place
        const exercise={
            username:state.username,
            description:state.description,
            duration:state.duration,
            date:state.date
        }

        
        axios.post('http://localhost:5000/exercise/update/' + id, exercise)
        .then(res => console.log(res.data));
        window.location.replace('/')
    }
                       

    return(
        
        <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={onSubmitForm}>
          <div className="form-group"> 
            <label>Username: </label>
            <select
                required
                className="form-control"
                value={state.username}
                onChange={onChangeUsername}>
                {
                  users.map(function(user) {
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
                value={state.description}
                onChange={onChangeDescription}
                />
          </div>
          <br/>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={state.duration}
                onChange={onChangeDuration}
                />
          </div>
          <br/>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={state.date}
                onChange={onChangeDate}
              />
            </div>
          </div>
          <br/>
  
          <div className="form-group">
            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}

export default EditExercise;