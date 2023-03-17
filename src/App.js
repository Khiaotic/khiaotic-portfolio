import logo from './logo.svg';
import './App.css';
import {NavBar, Navbar} from './components/NavBar';
import {Hero} from './components/Hero';
import {WebSkills} from './components/WebSkills';
import {WebProjects} from './components/WebProjects';
import {Footer} from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <WebSkills/>
     <WebProjects />
     <Footer />
    </div>
  );
}

export default App;
