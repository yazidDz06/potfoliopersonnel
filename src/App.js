import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/portf.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
