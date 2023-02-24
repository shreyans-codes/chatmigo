import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Column1 from "./Column1";
import Column2 from "./Column2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewColumn() {
  return (
    <Box flex={3} p={0}>
      <Grid container height="100vh">
        <Grid xs={2}>
          <Column1 />
        </Grid>
        <Grid xs={10}>
          <Column2 />
        </Grid>
      </Grid>
    </Box>
  );
}
