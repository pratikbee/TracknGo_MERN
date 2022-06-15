import express from 'express';
import { addUser,findUsers } from '../controllers/Users.js';
const router=express.Router();


router.post('/add',addUser);
router.get('/',findUsers);


export default router;