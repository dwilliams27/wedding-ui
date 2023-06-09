import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import OurStory from './components/OurStory';
import Venue from './components/Venue';
import AdditionalDetails from './components/AdditionalDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/additional-details" element={<AdditionalDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
