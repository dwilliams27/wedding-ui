import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import OurStory from './components/OurStory';
import Venue from './components/Venue';
import AdditionalDetails from './components/AdditionalDetails';
import RsvpForm from './components/RSVP';
import Travel from './components/Travel';
import FAQ from './components/FAQ';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { COLOR_GREEN, DARK_GREEN } from './models/models';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLOR_GREEN,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black', // Change default text color
          '&:hover': {
            // Optional: Change hover state styles if desired
            backgroundColor: 'lightgreen',
          },
          '&.Mui-focusVisible': {
            // Change focus outline color for Buttons
            boxShadow: `0 0 0 2px ${COLOR_GREEN}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.MuiInputLabel-shrink': {
            color: `${DARK_GREEN} !important`,
          },
        },
      }
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/additional-details" element={<AdditionalDetails />} />
            <Route path="/rsvp" element={<RsvpForm />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
