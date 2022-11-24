import './App.scss';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import SocialLinks from './components/socialLink';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map(({
            id, path, element,
          }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
        <SocialLinks />
      </Router>
    </div>
  );
}

export default App;
