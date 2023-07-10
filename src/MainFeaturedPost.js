import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { Avatar } from '@mui/material';
function MainFeaturedPost(props) {
  const { post } = props;
  const isPhone = useMediaQuery('(max-width: 600px)'); // Adjust the screen width breakpoint as needed

  return (
    <div>
    {!isPhone && <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(/MainBanner.png)',
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="/MainBanner.png" alt="ayushi image" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color={"#37343B"} gutterBottom>
            Ayushi Dwivedi
            </Typography>
            <Typography variant="h5" color="#3E6787" paragraph>
            Passionate about meaningful impact and driven by the desire to solve real-world problems
            </Typography>
            <Typography variant="subtitle1" color="#3E6787" paragraph>
            Computer Science 2024 Grad @ Cal State East Bay | Women In Leadership Fellow Spring 2023 | Infocepts 2019-2022
              </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
}
{isPhone && 
  <Paper
  sx={{
    position: 'relative',
    backgroundColor: 'white',
    color: '#fff',
    mb: 4,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  {/* Increase the priority of the hero background image */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}
  />
  <Grid container>
    <Grid item md={6}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <div>
        <Avatar
          src="/mainbannerphone.jpg"
          sx={{
            width: '150px',
            height: '150px',
            mr: 3,
            zIndex: 9999, 
          }}
        />
          <Typography component="h1" variant="h3" color={"#37343B"} gutterBottom>
            Ayushi Dwivedi
          </Typography>
          
          <Typography variant="h5" color="#3E6787" paragraph>
            Passionate about meaningful impact and driven by the desire to solve real-world problems
          </Typography>
          <Typography variant="subtitle1" color="#3E6787" paragraph>
            Computer Science 2024 Grad @ Cal State East Bay | Women In Leadership Fellow Spring 2023 | Infocepts 2019-2022
          </Typography>
        </div>
      </Box>
    </Grid>
  </Grid>
</Paper>
}
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
