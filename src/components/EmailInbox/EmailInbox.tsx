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
      <Box className={classes.header}>
        <Typography>Inbox</Typography>
        <Box className={classes.messageDetails}>
          <Typography className={classes.messageDetailsTypography}>
            1800 messages,
          </Typography>
          <Typography className={classes.messageDetailsTypography}>
            {" "}
            2 unread messages
          </Typography>
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
      <hr color="white" />
      <Box className={classes.inboxContainerMain}>
        {InboxStaticData?.map((item) => (
          <Box className={classes.emailCartContainer}>
            <Box className={classes.emailInfoContainer}>
              <Box className={classes.userInfoContainer}>
                <Box className={classes.imgContainer}>
                  <Image src={item.profileImg} alt="image no no" />
                </Box>

                <Box>
                  <Typography>{item.Name}</Typography>
                  <Typography>{item.Subject}</Typography>
                </Box>
              </Box>
              <Box>{item.time}</Box>
            </Box>
            <Box className={classes.emailBodyContainer}>
              <Typography>{item.Message}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmailInbox;
