import React, { useState } from 'react';


const CreateExercise=()=>{

    const [data,setData]=useState({
        username:"",
        description:"",
        duration:0,
        date:new Date(),
        users:[]
    })

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


    return(
        <div>
            <p>
                This is create Exercise
            </p>
        </div>
    )
}

export default CreateExercise;