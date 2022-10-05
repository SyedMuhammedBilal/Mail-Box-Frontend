import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Apple from "@/assets/apple.svg";
import Image from "next/image";

const LoginTextField = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Frame72}>
      <Box>
        <TextField
          className={classes.textFieldContainer}
          id="filled-basic"
          placeholder="Enter Email"
          inputProps={{ className: classes.input }}
          variant="filled"
          InputLabelProps={{
            style: { color: "#7B7B7B" },
          }}
        />
      </Box>
      <Box>
        <TextField
          className={classes.textFieldContainer}
          id="filled-basic"
          placeholder="Password"
          inputProps={{ className: classes.input }}
          variant="filled"
          InputLabelProps={{
            style: { color: "#7B7B7B" },
          }}
        />
      </Box>
      <Box className={classes.forgotPasswordContainer}>
        <Typography className={classes.forgotPassword}>
          Recover Password?
        </Typography>
      </Box>
      <Button className={classes.loginButton}>Sign In</Button>

      <Box className={classes.orContainer}>
        <Box className={classes.line}></Box>
        <Typography className={classes.or}>or continue with</Typography>
        <Box className={classes.line}></Box>
      </Box>

      <Box className={classes.socialMediaContainer}>
        <Box className={classes.socialContainer}>
          <Image src={Google} alt="svg" />
        </Box>
        <Box className={classes.socialContainer} style={{ backgroundColor: "#fff" }}>
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
