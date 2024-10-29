import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';
function App() {
  return (
    <LocationProvider>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        
        </Routes>
    </Router>
</LocationProvider>
  )
}

export default App
