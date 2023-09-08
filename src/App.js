import './App.css';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Gold from './Navbar/Gold';
import Silver from './Navbar/Silver';
import Contact from './Navbar/Contact';
import Nav from './Navbar/Nav';
import RouterNav from './Navbar/RouterNav';


function App() {
  return (
    <div className='bg-gray-300' >
      
     <Nav/>
     <RouterNav/>
     {/* <Home/> */}

     <About/>
     <Gold/>
     <Silver/>
     <Contact/>
     
    
    
    </div>
  );
}

export default App;
