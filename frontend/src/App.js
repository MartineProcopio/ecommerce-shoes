import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]">
      
      <Router>
          <Navbar/>
        <Routes></Routes>
       </Router>


    </div>
  );
}

export default App;
