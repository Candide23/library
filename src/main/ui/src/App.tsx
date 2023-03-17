import React from 'react';
import './App.css';
import { Carousel } from './layouts/HomePage/components/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/components/ExploreTopBooks';
import { Heros } from './layouts/HomePage/components/Heros';
import { LibraryServices } from './layouts/HomePage/components/LibraryServices';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
      <Footer/>   
    </div>
  );
}

export default App;
