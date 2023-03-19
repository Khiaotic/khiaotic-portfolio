import logo from './logo.svg';
import './App.css';
import {NavBar, Navbar} from './components/NavBar';
import {Hero} from './components/Hero';
import {WebSkills} from './components/WebSkills';
import {Projects} from './components/WebProjects';
import {AnimationSkills} from './components/AnimationSkills';
import {Footer} from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <WebSkills/>
     <Projects />
     <AnimationSkills />
     <Footer />
    </div>
  );
}

export default App;
