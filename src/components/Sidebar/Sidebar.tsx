import React from "react";
import { Box, Typography } from "@material-ui/core";
import Ellipse4 from "../../assets/Ellipse4.svg";
import Ellipse5 from "../../assets/Ellipse5.svg";
import Ellipse6 from "../../assets/Ellipse6.svg";

import Image from "next/image";
import useStyles from "./styles";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Frame121}>
      <Box className={classes.Frame126}>
        <Box className={classes.Frame123}>
          {/* <Box className={classes.Group7}> */}
          <Image src={Ellipse4} />
          <Image src={Ellipse5} />
          <Image src={Ellipse6} />
          {/* </Box> */}
        </Box>
        <Box className={classes.Frame122}></Box>
      </Box>
      <Box className={classes.Frame124}></Box>
    </Box>
  );
};

export default Sidebar;
