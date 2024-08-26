import './App.css';
import Mainview from './components/Mainview';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import WeatherMap from './components/WeatherMap';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' exact element={<Mainview/>}/>
        <Route path='/weathermap' element={<WeatherMap/>}/>
      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
