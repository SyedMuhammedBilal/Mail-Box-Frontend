import React from "react";
import { Box } from "@material-ui/core";
import People from "../../assets/People.svg";
import Image from "next/image";
import useStyles from "../Login-HeroSection/stylesheet";
import SignHeroSection from "../HeroSection/HeroSection";
import SignUpTextField from "../Signup-TextField/SignupTextField";

const SignupHeroSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Frame91}>
        <Box className={classes.Frame92}>
          <SignHeroSection
            firstTypo={"Sign up to"}
            secondTypo={"Recharge Direct"}
            firstParaTypo={"If you have an account"}
            secondParaTypo={"Sign in here!"}
          />
        </Box>

        <Box className={classes.Frame53}>
          <Image src={People} />
        </Box>
        <Box className={classes.fieldMainContainer}>
          <SignUpTextField />
        </Box>
      </Box>
    </Box>
  );
};

export default SignupHeroSection;
