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
    style: '--i: 1, --clr: #f5f5f5',
  },
  {
    id: 2,
    path: '/About',
    link: 'about',
    element: <About />,
    style: '--i: 2, --clr: #f5f5f5',
  },
  {
    id: 3,
    path: '/Skills',
    link: 'skills',
    element: <Skills />,
    style: '--i: 3, --clr: #f5f5f5',
  },
  {
    id: 4,
    path: '/Portfolio',
    link: 'portfolio',
    element: <Portfolio />,
    style: '--i: 4, --clr: #f5f5f5',
  },
  {
    id: 5,
    path: '/Contact',
    link: 'contact',
    element: <Contact />,
    style: '--i: 5, --clr: #f5f5f5',
  },
];

export default routes;
