import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const routes = [
  {
    id: 1,
    path: '/',
    link: 'home',
    element: <Home />,
  },
  {
    id: 2,
    path: '/About',
    link: 'about',
    element: <About />,
  },
  {
    id: 3,
    path: '/Skills',
    link: 'skills',
    element: <Skills />,
  },
  {
    id: 4,
    path: '/Portfolio',
    link: 'portfolio',
    element: <Portfolio />,
  },
  {
    id: 5,
    path: '/Contact',
    link: 'contact',
    element: <Contact />,
  },
];

export default routes;
