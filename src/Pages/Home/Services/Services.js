import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Service from '../Service/Service';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services=[
    {
        name:'Flouride Treatment',
        description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley',
         img:flouride
    },
    {
        name:'Cavity filling',
        description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley',
         img:cavity
    },
    {
        name:'Teeth whitening',
        description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley',
         img:whitening
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ fontWeight: 500,m:2, color: 'success.main' }} variant="h6" component="div">
          Our Services
        </Typography>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
          Services We Provide
        </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service
              key={service.name}
              service={service}
              ></Service>)
          }
        </Grid>
            </Container>

      </Box>
    );
};

export default Services;