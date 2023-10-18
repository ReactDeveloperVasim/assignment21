import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { India } from "./component/India";
import { Us } from "./component/Us";
import { Uk } from "./component/Uk";
import { NavList } from "./component/NavList";

function App() {
  return (
    <Card sx={{height:"100vh"}}>
      <CardContent>
        <BrowserRouter>
        <NavList />
            <Routes>
                <Route path="/" element={<India />} />
                <Route path="/us" element={<Us />}/>
                <Route path="/uk" element={<Uk />}/>
            </Routes>
        </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;
