import React, { useState } from 'react';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select, FormHelperText, Box, Typography, Container, Grid, createTheme, ThemeProvider, Fade } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TopBar from './TopBar';
import { Fonts } from '../utils/Fonts';

interface FormValues {
  name: string;
  songRec: string;
  foodPreference: string;
  dietaryRestrictions?: string;

  guestName: string;
  guestFoodPreference: string;
  guestDietaryRestrictions: string;
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
  guestDietaryRestrictions: ''
};

const initialErrorValues: FormErrors = {
  name: '',
  foodPreference: '',
};

const RsvpForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrorValues);
  const [showGuestFields, setShowGuestFields] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
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
            <FormControl fullWidth error={!!formErrors.foodPreference} sx={{ mb: 2 }}>
              <InputLabel>Food Preference</InputLabel>
              <Select
                label="Food Preference"
                name="foodPreference"
                value={formValues.foodPreference}
                onChange={handleInputChange as any}
                error={!!formErrors.foodPreference}
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
            />
            <TextField
              sx={{ mb: 2 }}
              label="Song Recommendation!"
              variant="outlined"
              name="songRec"
              value={formValues.songRec}
              onChange={handleInputChange}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
              <Button
                variant="outlined"
                startIcon={showGuestFields ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                onClick={handleAddGuest}
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
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Guest Food Preference</InputLabel>
                  <Select
                    label="Guest Food Preference"
                    name="guestFoodPreference"
                    value={formValues.guestFoodPreference}
                    onChange={handleInputChange as any}
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
                />
              </Grid>
            )}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            
          </Box>
        </Container>
      </Fade>
    </React.Fragment>
  );
};

export default RsvpForm;