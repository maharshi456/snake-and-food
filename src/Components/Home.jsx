import React from "react";
import { useNavigate } from "react-router";
import BG2 from "../assets/images/Background2.jpg";
import BG1 from "../assets/images/Background1.jpg";
import Wall from "../assets/images/wall.jpg";
import Infinity from "../assets/images/infinity.jpg";
import Poster from "../assets/images/poster.png";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        height='735'
        component="img"
        image={Poster}
        title="Pancakes"
        alt="Pancakes"
      />
      <Box
        height={'50%'}
        width={'70%'}
        sx={{
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(7px)",
          boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
          zIndex: 4,
          position: "absolute",
          color: "white",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: 5,
          p: 8
        }}
      >
        <Grid container spacing={3} textAlign={"center"}>
          <Grid item xs={6} textAlign={"-webkit-center"}>
            <Card
              sx={{
                width: "70%",
                borderRadius: 5,
                boxShadow: "18",
              }}
              onClick={() => navigate("/Border")}
            >
              <CardMedia
                src={Wall}
                sx={{ height: 200, width: 400 }}
                component="img"
              />
              <CardContent sx={{ backgroundColor: "beige" }}>
                <Typography textAlign={"center"} variant="h4">
                  Border
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  In this mode you control a snack aiming to get food while
                  avoiding <b>walls</b>. Test your reflexes and see how far you
                  can go.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} textAlign={"-webkit-center"}>
            <Card
              sx={{
                width: "70%",
                borderRadius: 5, boxShadow: "18"
              }}
              onClick={() => navigate("/Infinity")}
            >
              <CardMedia
                src={Infinity}
                sx={{ height: 200, width: 400 }}
                component="img"
              />
              <CardContent sx={{ backgroundColor: "beige" }}>
                <Typography textAlign={"center"} variant="h4">
                  Infinity And Beyond
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  In this mode, there are no time limits or maps just pure
                  snacking fun. Test your skills as you guide your character
                  through an ever-changing, perilous snacking world.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card >
  );
};

export default Home;
