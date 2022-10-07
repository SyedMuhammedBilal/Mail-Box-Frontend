import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "../EmailInbox/stylesheet";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import { InboxStaticData } from "../../../static/InboxStaticData";
import Image from "next/image";
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
            <Box>
              <TextField />
            </Box>
            <Box>
              <EditIcon />
            </Box>
          </Box>
        </Box>

        <Box className={classes.inboxContainerMain}>
          {InboxStaticData?.map((item) => (
            <Box className={classes.emailCartContainer}>
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
                <Typography style={{ color: "#7F7F7F" }}>
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
