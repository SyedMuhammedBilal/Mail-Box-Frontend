import React from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import People from "../../assets/People.svg";
import Image from "next/image";
import useStyles from "./styles";
import LoginTextField from "../Login-TextField/LoginTextField";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Frame91}>
        <Box className={classes.Frame92}>
          <Box className={classes.Frame67}>
            <Box className={classes.Frame68}>
              <Typography className={classes.SigninHeading}>
                Sign In to <br /> Recharge Direct
              </Typography>
            </Box>
            <Box className={classes.Frame69}>
              <Typography className={classes.Paragraph}>
                If you don't an account <br /> you can{" "}
                <span className={classes.span}>Register here!</span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.Frame53}>
          <Image src={People} />
        </Box>
        <Box>
          <LoginTextField />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
