import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/socialLink';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
    </div>
  );
}

export default App;
