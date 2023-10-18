import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Us = () => {
  const [name, setName] = useState("NewYork");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("NewYork")}
          variant="contained"
          fullWidth
        >
          NewYork
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("Washington")}
          variant="contained"
          fullWidth
        >
          Washington
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="error"
          onClick={() => setName("Wikiki")}
          variant="contained"
          fullWidth
        >
          Wikiki
        </Button>
      </Grid>

      <Grid item xs={4}></Grid>

      <Card
        sx={{
          bgcolor: "crimson",
          color: "white",
          margin: 2,
          backgroundImage: `url(${path})`,
          backgroundSize: "cover",
          height: 600,
          width: 900,
         marginLeft:"-200px"
        }}
      >
        <CardContent>
          <h1 style={{ color: "purple", fontSize:"60px", marginTop:"200px" }}>{name}</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};