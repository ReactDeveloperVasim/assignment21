import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { NavItem } from "./NavItem";

export const NavList=()=>{
    return(
        <Card >
        <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <NavItem path="/" label="India" />
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/us" label="Us" />
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/uk" label="Uk" />
            </Grid>
           
        </Grid>
        </CardContent>
        </Card>
    );
}