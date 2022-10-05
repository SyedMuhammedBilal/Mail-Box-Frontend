import React from "react";
import { Box, Typography } from "@material-ui/core";
import Dropdown from "../../assets/Dropdown.svg";
import Vector from "../../assets/Vector.svg";
import Image from "next/image";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.Child1}>
        <Typography className={classes.NavbarMenus}>Home</Typography>
        <Typography className={classes.NavbarMenus}>About</Typography>
        <Typography className={classes.NavbarMenus}>Blog</Typography>
        <Typography className={classes.NavbarMenus}>Pages</Typography>
        <Typography className={classes.NavbarMenus}>Contact</Typography>
      </Box>
      <Box className={classes.Child2}>
        <Box className={classes.Frame62}>
          <Box>
            <Typography className={classes.Heading}>English</Typography>
          </Box>
          <Box>
            <Image src={Dropdown} />
          </Box>
        </Box>
        <Box className={classes.Frame64}>
          <Box>
            <Typography className={classes.Heading2}>Sign in</Typography>
          </Box>
          <Box>
            <Image src={Vector} />
          </Box>
        </Box>
        <Box>
          <Box className={classes.Frame66}>
            <button className={classes.RegisterButton}>Register</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
