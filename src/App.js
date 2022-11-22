import React from 'react';
import './App.css';
import NavBar from './Components/navBar/navBar';
import Banner from './Components/Banner/banner';
import MovieRow from './Components/MovieRow/MovieRow';
import {originals,actions,horrorMovies,comedyMovies,romanceMovies} from "./URLs";
import Footer from './Components/footer/footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MovieRow url={originals} title='Netflix Originals' />
      <MovieRow url={actions} title='Action' isSmall />
      <MovieRow url={horrorMovies} title='Horror Movies' isSmall />
      <MovieRow url={comedyMovies} title='ComedyMovies' isSmall />
      <MovieRow url={romanceMovies} title='Romantic Movies' isSmall />
      <Footer />
    </div>
  );
}

export default App; 
