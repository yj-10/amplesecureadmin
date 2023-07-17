import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CreateRiskCoordinator() {
  return (
    <>
      <div className="admin_head">
        <h1>Add Risk Coordinator</h1>
      </div>

      <div className="Admin_Container">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default CreateRiskCoordinator;
