import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects,';
import Skills from './pages/Skills/Skills';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CV from './pages/CV/CV';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home />} />
            <Route  path='projects' index element={<Projects/>}/>
            <Route  path='skills' index element={<Skills/>}/>
            <Route  path='about' index element={<About/>}/>
            <Route  path='contact' index element={<Contact/>}/>
            <Route  path='cv' index element={<CV/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
