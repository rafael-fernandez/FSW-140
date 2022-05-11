import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';



function App() {
  
  
  useEffect(() =>{
    fetch("/items")
      .then(res => res.json())
      .then(res => setItems(res))
      .catch(err => console.log(err))
  })


  return (

    
  );
  
}

export default App;