import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Student from './components/student/Student';
import Teacher from './components/Teacher/Teacher';
import Render from './components/Render';
import StudentRouter from './components/student/StudentRouter';
import TeacherRouter from './components/Teacher/TeacherRouter';
function App() {
  return (
    <Router>
     <Render/>
     <Routes>
       <Route exact path='/student' element={<Student/>}/>
       <Route exact path='/teacher' element={<Teacher/>}/>
       
     </Routes>
     {/* ======Student Route======= */}
      <StudentRouter/>
     {/* =====Teacher Router========  */}
     <TeacherRouter/>

    </Router>
  );
}

export default App;
