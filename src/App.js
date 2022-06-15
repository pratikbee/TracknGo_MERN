import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (

    <div className="container">
    <Router>
    <NavBar/>
    <br/>
    <Routes>
    <Route path="/" exact element={<ExercisesList></ExercisesList>}/>
    <Route path="/edit:id" element={<EditExercise></EditExercise>}/>
    <Route path="/create" element={<CreateExercise></CreateExercise>}/>
    <Route path="/user" element={<CreateUser></CreateUser>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
