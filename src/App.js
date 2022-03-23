import './reset.css';
import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (<>
    <Hero title="Jamie Moore" tagline="Frontend developer with an eye for design" />
    <Projects />
    <Contact />
  </>);
}

export default App;
