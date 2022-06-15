import Exercise from "../models/exercise_model.js";

export const findExercise=async(req,res)=>{
    Exercise.find().then(exercise=>res.json(exercise)).catch(err=>res.json("error:",err))
    
}

export const addExercise=async(req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);

    const newExercise=new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save().then(()=>res.json("Exercise added")).catch((err)=>res.status(400).json("error:"+err))
}


export const getExerciseId=async(req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>res.json(exercise))
    .catch(err=>res.status(400).json("Error"+err));
}

export const deleteExerciseById=async(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("exercise deleted"))
    .catch(err=>res.status(400).json("Error"+err));
}

export const updateExerciseById=async(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.username=req.body.username;
        exercise.description=req.body.description;
        exercise.duration=Number(req.body.duration);
        exercise.date=Date.parse(req.body.date);

        exercise.save()
        .then(()=>res.json("Exercise updated!"))
        .catch(err=>res.status(400).json("Error"+err))
    })
    .catch(err=>res.status(400).json("Error"+err))
}
