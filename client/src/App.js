import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ToDoPage from './pages/ToDoPage';





function App() {

 const [user, setUser] = useState(null);

 

 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element ={<Home sendUser={setUser}/>}/>
    <Route path='/tasks' element ={<ToDoPage user={user}/>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App;
