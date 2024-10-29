import React from 'react';
import Home from './pages/Home';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';
function App() {
  return (
    
    <BrowserRouter>
     <LocationProvider>
     <Routes>
            <Route path="/" element={<Home />} />
        
        </Routes>
     </LocationProvider>
    </BrowserRouter>

  )
}

export default App
