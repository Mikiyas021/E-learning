import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import '../Pagescss/Studentpage.css';
import Quizstudent from "./QuizStudent";
const Quiz = () => {
  return (
    <div className="app-container">
    <div>
      <Quizstudent />
  </div>
  </div>
    
  );
}

export default Quiz;
 