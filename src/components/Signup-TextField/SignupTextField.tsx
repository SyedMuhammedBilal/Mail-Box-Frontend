import React, { useMemo } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "../Login-TextField/stylesheet";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Apple from "@/assets/apple.svg";
import Image from "next/image";
import {
  MultiTextfields,
  SignButton,
  SignTextField,
} from "../Reusable-components";
import { UserService } from "@/services/user-service/user.service";

const SignUpTextField = () => {
  const [userDetails, setUserDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const userService = useMemo(() => new UserService(), []);
  const classes = useStyles();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await userService.signup(userDetails);
    console.log(response);
    return response;
  };

  return (
    <Box className={classes.Frame72}>
      <Box className={classes.Frame97}>
        <MultiTextfields
          value={userDetails.firstName}
          name="firstName"
          onChange={onChange}
          type="name"
          placeholder="First name"
        />
        <MultiTextfields
          value={userDetails.lastName}
          name="lastName"
          onChange={onChange}
          type="name"
          placeholder="Last name"
        />
      </Box>
      <SignTextField
        value={userDetails.email}
        name="email"
        onChange={onChange}
        type="email"
        placeholder="Create email"
      />
      <SignTextField
        value={userDetails.password}
        name="password"
        onChange={onChange}
        type="password"
        placeholder="Create password"
      />

      <SignButton onClick={onSubmit} label="Create account" />

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

export default SignUpTextField;
