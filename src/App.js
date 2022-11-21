import React from 'react';
import './App.css';
import NavBar from './Components/navBar/navBar';
import Banner from './Components/Banner/banner';
import MovieRow from './Components/MovieRow/MovieRow';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <MovieRow/>
    </div>
  );
}

export default App; 
