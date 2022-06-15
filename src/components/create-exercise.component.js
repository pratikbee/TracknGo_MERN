import React, { useEffect, useState } from 'react';


const CreateExercise=()=>{

    const [data,setData]=useState({
        username:"",
        description:"",
        duration:0,
        date:new Date(),
        users:[]
    })

    useEffect(()=>{
        setData({...data,username:"test User",users:["test User"]})
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

    const onSubmit=(e)=>{
        e.preventDefault();                              // default form submit will not take place
        const exercise={
            username:data.username,
            description:data.description,
            duration:data.duration,
            date:data.date
        }


        console.log(exercise);
        window.location('/')
    }
                       

    return(
        <div>
            <h3>Create New Exercises Log</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Username: </label>
                    <select ref="userInput"
                    required
                    className='form-control'
                    value={data.username}
                    onChange={onChangeUsername}>
                        {
                            data.users.map(function(user){
                                return(<option
                                        key={user}
                                        value={user}
                                        ></option>)
                            })
                        }

                    </select>
                </div>
                <div className='form-group'>
                    <label> Duration in minutes:</label>
                    <input
                        type="text"
                        className='form-control'
                        value={data.duration}
                        onChange={onChangeDuration} />
                        
                </div>
                <div className='form-group'>
                    <label>Date:</label>
                    <div>
                        <DatePicker
                        selected={data.date}
                        onChange={onChangeDate}>
                            
                        </DatePicker>
                    </div>
                </div>
                <div className='form-group'>
                    <input type="submit" value="Create Exercise Log" className='btn btn-primary'/>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;