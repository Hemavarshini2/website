import React from 'react';
import Home from './web/Home';
import Contact from './web/Contact';
import PlantList from './web/PlantList';
import Header from './web/Header'
import "./Header.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Login from './web/Login';
const plantData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    description: "Low-maintenance indoor plant.",
    imageUrl: "snake-plant.jpg" ,
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 45,
    description: "Trendy and elegant houseplant.",
    imageUrl: "fiddle-leaf-fig.jpg",
  },
  // Add more plant objects as needed
];




function App() {
  return (
    <Router>
      <div className='App'>
        
      <Header />
      
      <Routes>
        <Route path="/Home" element={<Header/>}/>
        <Route path="/about" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/plantList" element={<PlantList plantData={plantData}/>}/>
        <Route path="/Login"  element={<Login/>}/>
      </Routes>
      </div> 
      </Router>
  );

}

export default App;
