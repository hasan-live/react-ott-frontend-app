import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { BeakerIcon } from '@heroicons/react/solid'
import About from './components/Pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Movies from './components/Pages/Movies/Movies';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;