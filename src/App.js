import Intro from './components/intro/Intro';
import './App.css';
import About from './components/about/About';
import { ProjectList } from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Toogle from './components/toogle/Toogle';
import { useContext } from 'react';
import { ThemeContext } from './context';
function App() {

const theme = useContext(ThemeContext);
const darkMode=theme.state.darkMode;


  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >


<Toogle/>
<Intro/>
<About/>
<ProjectList/>
<Contact/>



    </div>
  );
}

export default App;
