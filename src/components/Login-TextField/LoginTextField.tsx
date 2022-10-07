import React, { useMemo } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Apple from "@/assets/apple.svg";
import Image from "next/image";
import { SignButton, SignTextField } from "../Reusable-components";
import { UserService } from "@/services/user-service/user.service";

const LoginTextField = () => {
  const [userCredentials, setUserCredentials] = React.useState({
    email: "",
    password: "",
  });
  const userService = useMemo(() => new UserService(), []);
  const classes = useStyles();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await userService.login(userCredentials);
    console.log(response);
    if (response) {
      window.location.href = "/emails";
      // save the token in the local storage
      localStorage.setItem("token", response.token);
    }
  };

  return (
    <Box className={classes.Frame72}>
      <SignTextField value={userCredentials.email}
          name="email"
          onChange={onChange}
          type="email" placeholder="Enter Email" />
      <SignTextField value={userCredentials.password}
          name="password"
          onChange={onChange}
          type="password" placeholder="Password" />
      <Box className={classes.forgotPasswordContainer}>
        <Typography className={classes.forgotPassword}>
          Recover Password?
        </Typography> 
      </Box>
      <SignButton onClick={onSubmit} label="Sign in" />

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
