import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import { useMediaQuery } from '@mui/material';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MyTechstack() {
    const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: isPhone ? 'url(/techstackmobile.png)' : 'url(/techstack.png)',
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="/techstack.jpg"
          alt="ayushi image"
        />
      }
      <Box
        sx={{
          position: "absolute",
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
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              Programming Languages
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Python, Java, Javascript
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              Web Technologies
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Web Technologies:
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              Data Science and Visualization
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Power BI, MicroStrategy, SQL, Python (pandas, matplotlib,
              scikit-learn, NumPy, yolo, Pytorch)
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              OS Platforms
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Linux Red Hat, Windows
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              Database
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Microsoft SQL Server
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#37343B"}
              gutterBottom
              fontWeight={"bold"}
            >
              Version Controlling:
            </Typography>
            <Typography variant="caption" color="#3E6787" paragraph>
              Git
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
