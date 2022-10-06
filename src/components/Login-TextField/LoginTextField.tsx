import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Apple from "@/assets/apple.svg";
import Image from "next/image";
import { SignButton, SignTextField } from "../Reusable-components";

const LoginTextField = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Frame72}>
      <SignTextField placeholder="Enter Email" />
      <SignTextField placeholder="Password" />
      <Box className={classes.forgotPasswordContainer}>
        <Typography className={classes.forgotPassword}>
          Recover Password?
        </Typography>
      </Box>
      <SignButton label="Sign in" />

      <Box className={classes.orContainer}>
        <Box className={classes.line}></Box>
        <Typography className={classes.or}>or continue with</Typography>
        <Box className={classes.line}></Box>
      </Box>

      <Box className={classes.socialMediaContainer}>
        <Box className={classes.socialContainer}>
          <Image src={Google} alt="svg" />
        </Box>
        <Box
          className={classes.socialContainer}
          style={{ backgroundColor: "#fff" }}
        >
          <Image src={Apple} alt="svg" />
        </Box>
        <Box className={classes.socialContainer}>
          <Image src={Facebook} alt="svg" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginTextField;
