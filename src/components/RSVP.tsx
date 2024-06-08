import React, { useState } from 'react';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select, FormHelperText, Box, Typography, Container, Grid, createTheme, ThemeProvider, Fade, Modal, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TopBar from './TopBar';
import { Fonts } from '../utils/Fonts';
import axios from 'axios';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { BACKGROUND, DARK_GREEN } from '../models/models';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: BACKGROUND,
  border: `2px solid ${DARK_GREEN}`,
  boxShadow: 24,
  p: 4,
};

interface FormValues {
  name: string;
  songRec: string;
  foodPreference: string;
  dietaryRestrictions?: string;

  guestName: string;
  guestFoodPreference: string;
  guestDietaryRestrictions: string;

  coming: boolean;
}

interface FormErrors {
  name: string;
  foodPreference: string;
}

const initialFormValues: FormValues = {
  name: '',
  songRec: '',
  foodPreference: 'none',
  dietaryRestrictions: '',
  guestName: '',
  guestFoodPreference: 'none',
  guestDietaryRestrictions: '',
  coming: true,
};

const initialErrorValues: FormErrors = {
  name: '',
  foodPreference: '',
};

function initFirebase() {
  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return getFirestore(app);
}

const RsvpForm: React.FC = () => {
  const db = initFirebase();

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrorValues);
  const [showGuestFields, setShowGuestFields] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validate = (fieldValues = formValues) => {
    let temp = { ...formErrors };

    if ('name' in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ('foodPreference' in fieldValues)
      temp.foodPreference = fieldValues.foodPreference ? "" : "This field is required.";

    setFormErrors({
      ...temp
    });

    if (fieldValues === formValues)
      return Object.values(temp).every(x => x === "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    setFormValues(updatedValues);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValues = { ...formValues, coming: !formValues.coming };
    setFormValues(updatedValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const docRef = await addDoc(collection(db, "rsvps"), {
          key: "value",
          ...formValues
        });
        
        setError(false);
        handleOpen();
      } catch (e) {
        console.error("Error adding document: ", e);
        setError(true);
        handleOpen();
      }
      // Submit form
      console.log(formValues);
      // Reset form
      setFormValues(initialFormValues);
    }
  };

  const handleAddGuest = () => {
    setShowGuestFields(!showGuestFields);
  };

  const theme = createTheme({
    typography: {
      fontFamily: Fonts.Cormorant,
      fontSize: 35
    },
  });

  return (
    <React.Fragment>
      <TopBar />
      <Fade in={true} timeout={2000}>
        <Container maxWidth="sm" sx={{ mb: '10rem' }}>
          <ThemeProvider theme={theme}>
            <Typography sx={{ marginTop: '4.5rem', marginBottom: '6rem', color: '#05200a', zIndex: 1 }}>
              RSVP
            </Typography>
          </ThemeProvider>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' } }}
          >
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                label="Are you attending?"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="coming" 
                    checked={formValues.coming} 
                    size="medium"
                    onChange={handleCheckboxChange as any} 
                    sx={{ '&.Mui-checked': {
                      color: DARK_GREEN, // Color when checked
                      borderRadius: 1 // Optional: adds border-radius to background
                    }, }}
                  />}
              />
            </Box>
            <FormControl fullWidth error={!!formErrors.foodPreference} sx={{ mb: 2 }}>
              <InputLabel>Food Preference</InputLabel>
              <Select
                label="Food Preference"
                name="foodPreference"
                value={formValues.foodPreference}
                onChange={handleInputChange as any}
                error={!!formErrors.foodPreference}
                disabled={!formValues.coming}
              >
                <MenuItem value="chicken">Parmesan Crusted Chicken</MenuItem>
                <MenuItem value="salmon">Grilled Salmon</MenuItem>
                <MenuItem value="vegetarian">Vegetarian</MenuItem>
                <MenuItem sx={{display: 'none'}} value="none"></MenuItem>
              </Select>
              {formErrors.foodPreference && <FormHelperText>{formErrors.foodPreference}</FormHelperText>}
            </FormControl>
            <TextField
              sx={{ mb: 2 }}
              label="Any Dietary Restrictions?"
              variant="outlined"
              name="dietaryRestrictions"
              value={formValues.dietaryRestrictions}
              onChange={handleInputChange}
              disabled={!formValues.coming}
            />
            <TextField
              sx={{ mb: 2 }}
              label="Song Recommendation!"
              variant="outlined"
              name="songRec"
              value={formValues.songRec}
              onChange={handleInputChange}
              disabled={!formValues.coming}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
              <Button
                variant="outlined"
                startIcon={showGuestFields ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                onClick={handleAddGuest}
                disabled={!formValues.coming}
              >
                {showGuestFields ? "Remove Plus One" : "Add Plus One"}
              </Button>
            </div>
            {showGuestFields && (
              <Grid item xs={12} sx={{ mt:3 }}>
                <TextField
                  fullWidth
                  label="Guest Name"
                  variant="outlined"
                  name="guestName"
                  onChange={handleInputChange}
                  value={formValues.guestName}
                  disabled={!formValues.coming}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Guest Food Preference</InputLabel>
                  <Select
                    label="Guest Food Preference"
                    name="guestFoodPreference"
                    value={formValues.guestFoodPreference}
                    onChange={handleInputChange as any}
                    disabled={!formValues.coming}
                  >
                    <MenuItem value="chicken">Parmesan Crusted Chicken</MenuItem>
                    <MenuItem value="salmon">Grilled Salmon</MenuItem>
                    <MenuItem value="vegetarian">Vegetarian</MenuItem>
                    <MenuItem sx={{display: 'none'}} value="none"></MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Guest Dietary Restrictions"
                  variant="outlined"
                  name="guestDietaryRestrictions"
                  onChange={handleInputChange}
                  value={formValues.guestDietaryRestrictions}
                  disabled={!formValues.coming}
                />
              </Grid>
            )}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {error ? "Error :(" : "Success"}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error ? "There was an error submitting your RSVP. Please try again, or just text your info to 847-987-2670. Sorry!!" : "Thank you for submitting your RSVP!"}
              </Typography>
            </Box>
          </Modal>
        </Container>
      </Fade>
    </React.Fragment>
  );
};

export default RsvpForm;