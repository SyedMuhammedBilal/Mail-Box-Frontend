import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "../EmailInbox/stylesheet";
import TextField from "@material-ui/core/TextField";
import PencilIcon from "../../assets/Pencil.svg";
import { InboxStaticData } from "../../../static/InboxStaticData";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const EmailInbox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.scrollableDiv}>
        <Box className={classes.header}>
          <Box className={classes.headerLeft}>
            <Box className={classes.headerLeftTop}>
              <Typography className={classes.inboxTypo}>Inbox</Typography>
            </Box>
            <Box className={classes.messageDetails}>
              <Typography className={classes.messageDetailsTypography}>
                1800 messages,
              </Typography>
              <Typography className={classes.messageDetailsTypography}>
                {" "}
                2 unread messages
              </Typography>
            </Box>
          </Box>

          <Box className={classes.searchMessageContainer}>
            <Box style={{ width: "-webkit-fill-available" }}>
              <TextField
                className={classes.textFieldContainer}
                id="filled-basic"
                placeholder={"Search"}
                variant="filled"
                InputLabelProps={{
                  style: { color: "#7B7B7B" },
                }}
                InputProps={{
                  startAdornment: <SearchIcon style={{ fill: "#7F7F7F" }} />,
                  endAdornment: <ExpandMoreIcon style={{ fill: "#7F7F7F" }} />,
                }}
              />
            </Box>
            <Box className={classes.editContainer}>
              <Image src={PencilIcon} alt="pencil-svg" />
            </Box>
          </Box>
        </Box>

        <Box className={classes.inboxContainerMain}>
          {InboxStaticData?.map((item) => (
            <Box key={item?.id} className={classes.emailCartContainer}>
              <Box className={classes.emailInfoContainer}>
                <Box className={classes.userInfoContainer}>
                  <Box className={classes.imgContainer}>
                    <Image
                      style={{ borderRadius: "50%" }}
                      src={item.profileImg}
                      alt="image no no"
                    />
                  </Box>

                  <Box>
                    <Typography>{item.Name}</Typography>
                    <Typography>{item.Subject}</Typography>
                  </Box>
                </Box>
                <Box>{item.time} PM</Box>
              </Box>
              <Box className={classes.emailBodyContainer}>
                <Typography
                  style={{
                    color: "#7F7F7F",
                  }}
                >
                  {item.Message}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EmailInbox;
