import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';
import { Avatar } from '@mui/material';
function FeaturedPost(props) {
  const { post } = props;
  const isPhone = useMediaQuery('(max-width: 600px)'); // Adjust the screen width breakpoint as needed
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
      {isPhone && <Avatar
          src={post.image}
          sx={{
            width: '150px',
            height: '150px',
            mr: 3,
            zIndex: 9999, 
          }}
        />}
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" color={"#3E6787"}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="caption" paragraph>
              {post.description1}
            </Typography>
            <Typography variant="caption" paragraph>
              {post.description2}
            </Typography>
            <Typography variant="caption" paragraph>
              {post.description3}
            </Typography>
            <Link variant="caption" href={post.linktogit}>
              link to project
            </Link>
            
            {/* <Typography variant="subtitle1" color="primary">
              Computer Science 2024 Grad @ Cal State East Bay | Women In Leadership Fellow Spring 2023 | Infocepts 2019-2022
            </Typography> */}
          </CardContent>
          {!isPhone && <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
