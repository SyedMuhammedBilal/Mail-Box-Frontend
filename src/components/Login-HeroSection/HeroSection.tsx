import React from "react";
import { Box } from "@material-ui/core";
import People from "../../assets/People.svg";
import Image from "next/image";
import useStyles from "./stylesheet";
import LoginTextField from "../Login-TextField/LoginTextField";
import SignHeroSection from "../HeroSection/HeroSection";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.Frame91}>
        <Box className={classes.Frame92}>
          <SignHeroSection
            firstTypo={"Sign In to"}
            secondTypo={"Recharge Direct"}
            firstParaTypo={"If you dont have an account"}
            secondParaTypo={"Register here!"}
          />
        </Box>

        <Box className={classes.Frame53}>
          <Image src={People} />
        </Box>
        <Box className={classes.fieldMainContainer}>
          <LoginTextField />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
