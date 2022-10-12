import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";
import Icon1 from "../../assets/Icon1.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon4 from "../../assets/Icon4.svg";
import Icon5 from "../../assets/Icon5.svg";
import Icon6 from "../../assets/Icon6.svg";
import Icon7 from "../../assets/Icon7.svg";
import Icon8 from "../../assets/Icon8.svg";
import Icon9 from "../../assets/Icon9.svg";
import Icon10 from "../../assets/Icon10.svg";
import WorkIcon from "@/assets/WorkIcon.svg";
import ProfImage from "@/assets/haris.jpg";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";

const EmailDetail = () => {
  const classes = useStyles();
  return (
    <Box className={classes.emailMainContainer}>
      <Box className={classes.optionsContainer}>
        <Box className={classes.optionsWrapper}>
          <Box className={classes.optionsBox1}>
            <Image src={Icon1} alt="icon1" />
          </Box>

          <Box className={classes.optionsBox2}>
            <Image src={Icon2} alt="icon2" />
            <Image src={Icon4} alt="icon4" />
          </Box>

          <Box className={classes.optionsBox3}>
            <Image src={Icon5} alt="icon5" />
            <Image src={Icon6} alt="icon6" />
            <Image src={Icon7} alt="icon7" />
          </Box>

          <Box className={classes.optionsBox4}>
            <Image src={Icon8} alt="icon8" />
            <Typography className={classes.optionsBox4Typo}>
              Move to..
            </Typography>
          </Box>

          <Box className={classes.optionsBox5}>
            <Image src={Icon9} alt="icon9" />
            <Image src={Icon10} alt="icon10" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.scrollableDiv}>
        <Box className={classes.userEmailDetails}>
          <Box className={classes.userEmailDetailsLeft}>
            <Image
              src={ProfImage.src}
              width={64}
              height={64}
              style={{ borderRadius: "50%" }}
              alt="prof-image"
            />
          </Box>
          <Box className={classes.userEmailDetailsRight}>
            <Box className={classes.userEmailDetailsRightTop}>
              <Typography className={classes.userEmailDetailsRightTopTypo1}>
                Haris Kuk
              </Typography>
              <Typography className={classes.userEmailDetailsRightTopTypo2}>
                20 june 2022 : 9:16AM
              </Typography>
            </Box>
            <Box className={classes.userEmailDetailsRightBottom}>
              <Typography className={classes.userEmailDetailsRightBottomTypo}>
                to: <span style={{ color: "#fff" }}>Ahsan Chandio</span>
              </Typography>
              <Box style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                flexDirection: "column",
                padding: '0px'
              }}>
                <Image src={WorkIcon} alt="work-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailDetail;
