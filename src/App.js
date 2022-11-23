import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/socialLink';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
    </div>
  );
}

export default App;
