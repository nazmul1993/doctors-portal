import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner={
    background:`url(${bg})`,
    marginTop:175,
    backgroundColor:'rgba(45, 58,74)',
    backgroundBlendMode:'darken,luminosity'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{width:400,marginTop:'-110px'}}
            src={doctor} alt=""></img>
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex',
          justifyContent: 'flex-start',
          alignItems:'center',
          textAlign:'left'
          }}>
              <Box>
              <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
                  Appointment
                </Typography>
              <Typography variant="h4" sx={{mb:5}} style={{color:'white'}}>
                  Make an Appointment Today
                </Typography>
              <Typography variant="h6" sx={{my:5}} style={{color:'white',fontSize:14,fontWeight:300}}>
              A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file.
                </Typography>
                <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
              </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;