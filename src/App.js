import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (<>
    <Header title="Jamie Moore" tagline="Frontend developer with an eye for design" />
    <Projects />
    {/* <Contact /> */}
  </>);
}

export default App;
