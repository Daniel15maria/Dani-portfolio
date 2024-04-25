import './App.css';
import { Navbarr } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footers } from './components/footer/Footer';
import { Internship } from './components/Internship';
import { Education } from './components/Education';


function App() {
  return (
    <div className="App">
      <Navbarr />
      <Banner />
      <Skills />
      <Internship />
      <Projects />
      <Education />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
