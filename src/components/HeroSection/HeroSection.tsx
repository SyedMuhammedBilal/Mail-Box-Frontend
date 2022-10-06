import { Box, Typography } from "@material-ui/core";
import useStyles from "../Login-HeroSection/stylesheet";
import React from "react";

const SignHeroSection = ({
  firstTypo,
  secondTypo,
  firstParaTypo,
  secondParaTypo,
}: {
  firstTypo: string;
  secondTypo: string;
  firstParaTypo: string;
  secondParaTypo: string;
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.Frame67}>
      <Box>
        <Typography className={classes.SigninHeading}>
          {firstTypo} <br /> {secondTypo}
        </Typography>
      </Box>
      <Box className={classes.Frame69}>
        <Typography className={classes.Paragraph}>
          {firstParaTypo} <br /> you can{" "}
          <span className={classes.span}>{secondParaTypo}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignHeroSection;
