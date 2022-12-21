import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portefolio from './components/Portefolio';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header />
       <Home />
       <About />
       <Portefolio />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
