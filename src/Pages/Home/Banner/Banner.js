import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container } from '@mui/material';


const bannerBg={
    background:`url(${bg})`,
    

}


const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:400,
    
   
}
const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
            <Box style={{textAlign:'left'}}>
            <Typography variant="h3">
                Your new smile <br></br>
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my:3,fontSize:13,fontWeight: 300,color:'gray'}}>
            A tiny VS Code extension made up of a few commands that generate 
            and insert lorem ipsum text into a text file.
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>
            Get Appoinment
            </Button>
            </Box>          
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
        </Grid>

        
      </Grid>
          </Container>
    </div>
    );
};

export default Banner;