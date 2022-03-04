import './App.css';
import { Home, Property } from './Pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property />} />
    </ Routes>
  );
}

export default App;
