import './App.css';
import { Carousel } from './layouts/HomePage/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/ExploreToBooks';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';
import { ReturnBook } from './layouts/HomePage/ReturnBook';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

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
