import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavItem=({item})=>{
    return(
        <Link to={item.path}>
            <Button variant="contained" fullWidth color="secondary" marginBottom="30px">
                {item.label}
            </Button>
        </Link>

    );
} 