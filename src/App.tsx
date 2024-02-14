import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import OurStory from './components/OurStory';
import Venue from './components/Venue';
import AdditionalDetails from './components/AdditionalDetails';
import RsvpForm from './components/RSVP';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/additional-details" element={<AdditionalDetails />} />
          <Route path="/rsvp" element={<RsvpForm />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
