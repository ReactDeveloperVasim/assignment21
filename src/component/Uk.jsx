import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Uk = () => {
  const [name, setName] = useState("Scotland");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={4}>
        <Button
          color="primary"
          onClick={() => setName("Scotland")}
          variant="contained"
          fullWidth
        >
          Scotland
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="primary"
          onClick={() => setName("Wales")}
          variant="contained"
          fullWidth
        >
          Wales
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          color="primary"
          onClick={() => setName("England")}
          variant="contained"
          fullWidth
        >
          England
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
          <h1 style={{ color: "white", fontSize:"60px", marginTop:"200px" }}>{name} </h1>
        </CardContent>
      </Card>
    </Grid>
  );
};