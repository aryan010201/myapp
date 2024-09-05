// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './module/login';
import Student from './module/student';
import Alumni from './module/alumni';
import Convo from './module/convo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student_dashboard" element={<Student />} />
        <Route path="/alumni_dashboard" element={<Alumni />} />
        <Route path="/convo" element={<Convo />} />
      </Routes>
    </Router>
  );
}

export default App;


//basic
/*
import Login from './module/login';
import Student from './module/student';
import Alumni from './module/alumni';
import Convo from './module/convo';






function App() {
  return (
   <Alumni/>
  );
}

export default App;
*/