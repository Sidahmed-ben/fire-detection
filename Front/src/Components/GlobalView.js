import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";
import Register from "./Register";

// Render a YouTube video player

const ItemVideo = styled(Paper)(({ theme }) => ({
  backgroundColor: "dark",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "4px",
  margin: "10px",
  marginLeft: "50px",
  minHeight: "200px",
}));

const ItemRegister = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FB8500",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: "50px",
  marginLeft: "60px",
  marginRight: "60px",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
}));

const Item = styled(Paper)(({ theme }) => ({
  // // backgroundColor: "dark",
  // // ...theme.typography.body2,
  // // padding: theme.spacing(1),
  // textAlign: "Left",
  // opacity: 0,
  // // marginRight: 50,
  // marginTop: 40,
  // // color: theme.palette.text.secondary,
  // // borderRadius: "4px",
  // height: "40px",
}));

const ItemLogo = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  color: "#023047",
  fontSize: 30,
  marginTop: 50,
  marginLeft: 50,
  marginBottom: 0,
  padding: 5,
  // backgroundImage:
  //   'url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  backgroundColor: "#FB8500",
  // width: "100%",
  // height: "100%",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  // backgroundImage:
  //   'url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  backgroundColor: "#023047",
  height: " 900px",
}));

export default function GlobalView() {
  return (
    <StyledGrid container spacing={2}>
      <Grid item xs={3} style={{ height: "40px" }}>
        <ItemLogo> FIRE DETECTION </ItemLogo>
      </Grid>
      <Grid item xs={9} style={{ height: "40px" }}>
        {/* <Item>xs=10</Item> */}
      </Grid>
      <Grid item xs={8}>
        <ItemVideo>
          <VideoPlayer></VideoPlayer>
        </ItemVideo>
      </Grid>
      <Grid item xs={4}>
        <ItemRegister>
          <Register></Register>
        </ItemRegister>
      </Grid>
    </StyledGrid>
  );
}
