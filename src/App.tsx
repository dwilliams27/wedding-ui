import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import OurStory from './components/OurStory';
import Venue from './components/Venue';
import RsvpForm from './components/RSVP';
import Travel from './components/Travel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { COLOR_GREEN, DARK_GREEN, HOVER_GREEN, SUBMIT_BUTTON_GREEN } from './models/models';
import Events from './components/Events';
import DressCode from './components/DressCode';
import Registry from './components/Registry';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            backgroundColor: HOVER_GREEN,
          },
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 2px ${COLOR_GREEN}`,
          },
          '&.MuiButton-containedPrimary': {
            color: 'white',
            backgroundColor: SUBMIT_BUTTON_GREEN,
          }
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
            <Route path="/events" element={<Events />} />
            <Route path="/rsvp" element={<RsvpForm />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/dress-code" element={<DressCode />} />
            <Route path="/registry" element={<Registry />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
