import React from "react";
import { Box } from "@material-ui/core";
import TinBox from "../../assets/TinBox.svg";
import Trash from "../../assets/Trash.svg";
import Line4 from "../../assets/line4.svg";
import Bin from "../../assets/Bin.svg";
import Image from "next/image";
import useStyles from "./stylesheet";

const MailBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Child3}>
      <Box className={classes.Frame116}>
        <Box className={classes.Frame105}>
          <Box className={classes.Frame99}>
            <Image src={TinBox} />
          </Box>
          <Box className={classes.Frame50}>
            <Box className={classes.Frame100}>
              <Image src={Trash} />
            </Box>
            <Box className={classes.Frame101}>
              <Image src={Line4} />
            </Box>
            <Box className={classes.Frame102}>
              <Image src={Bin} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className={classes.Frame113}></Box>
                <Box className={classes.Frame114}></Box> */}
    </Box>
  );
};

export default MailBox;
