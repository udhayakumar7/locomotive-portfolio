
import './App.css'
import Home from './pages/Home'
import "locomotive-scroll/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
 const locomotiveScroll = new LocomotiveScroll();
  
 return (
    <>
      
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
      
    </>
  )
}

export default App
