import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import Artwork from './components/Artwork';
import Header from './components/Header'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/artwork/:artworkId" element={<Artwork />} />
      </Routes>
    </Router>
  );
}

export default App;
