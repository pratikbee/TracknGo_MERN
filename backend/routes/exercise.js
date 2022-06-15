import express from 'express';
import { findExercise,addExercise ,getExerciseId,deleteExerciseById,updateExerciseById} from '../controllers/Exercises.js';



const router=express.Router();

router.get('/',findExercise)
router.post('/add',addExercise)
router.get("/:id",getExerciseId)
router.delete("/:id",deleteExerciseById)
router.post("/update/:id",updateExerciseById)



export default router;

