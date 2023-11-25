import './App.css';
import Navbar from './Components/Naa';
import Home from './Components/Home';
import Destinations from './Components/Destinations';
import Reports from './Components/Reports';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Italypage from './Pages/Italypage'
import Romepage from './Pages/Romepage'
import Balipage from './Pages/Balipage'
import Tokoyopage from './Pages/Tokyopage'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/destinations' element ={<Destinations/>}/>
      <Route path='/reports' element ={<Reports/>}/>
      <Route path='/italypage' element ={<Italypage/>}/>
      <Route path='/romepage' element ={<Romepage/>}/>
      <Route path='/tokoyopage' element ={<Tokoyopage/>}/>
      <Route path='/balipage' element ={<Balipage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
