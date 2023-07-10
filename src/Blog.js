import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import MyTimeline from './mytimeline';
import MyTechstack from './mytechstack';
import Hobbies from './hobbies';
const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Ayushi Dwivedi',
  description:
    "Passionate about meaningful impact and driven by the desire to solve real-world problems",
  image: '/MainBanner.png',
  imageText: 'main image description',
  linkText: 'Computer Science 2024 Grad @ Cal State East Bay | Women In Leadership Fellow Spring 2023 | Infocepts 2019-2022',
};

const featuredPosts = [
  {
    title: 'Women In Leadership Fellow',
    date: 'Spring 2023',
    description1:
      'Awarded $1000 scholarship',
      description2:
      'Enhanced my leadership skills through active participation in conferences, networking opportunities, and presenting my project idea.',
      description3:
      'Formulated a project idea to enhance the accessibility of data charts for visually challenged people by creating browser extension that can provide a tabular representation of data along with sound effect. The Chrome extension has been created, currently focusing is on improving ML and computer vision knowledge to further enhance the project.',
    image: '/wil.jpg',
    imageLabel: 'Image Text',
    linktogit: 'https://github.com/AyuDwi1996/Chartbuster'
  },
  {
    title: 'Research Assistant- Drone Lab',
    date: 'Spring 2023 - present',
    description1:
      'Working as a research assistant in a drone lab to investigate various drones on the market, as well as drone components, applications, and potential risks.',
      description2:
      'Developed Python-based autonomous flight capabilities for Tello drone, utilizing the Tello SDK and Python libraries. Programmed drone to execute predefined flight patterns, control altitude, capture images.',
      description3:
      'Continuously advancing expertise in machine learning and computer vision to drive ongoing enhancements and innovations in autonomous flight capabilities for the Tello drone project.',
    image: '/drone.jpg',
    imageLabel: 'Image Text',
    linktogit:'https://github.com/AyuDwi1996'
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, elink: 'https://github.com/AyuDwi1996'},
    { name: 'LinkedIn', icon: LinkedInIcon,elink: 'https://www.linkedin.com/in/ayushi-dwivedi-15b469196/' },
    { name: 'Email', icon: EmailIcon,elink: 'mailto:adwivedi@horizon.csueastbay.edu' },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <MyTimeline/>
          <Grid container spacing={4} sx={{ mb: 3 }}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <MyTechstack />
          <Hobbies/>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Thank You For Visiting" posts={posts} />
            <Sidebar
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
