import React from "react";
import { Box, Typography } from "@material-ui/core";
import Msg from "../../assets/msg.svg";
import Inbox from "../../assets/inbox.svg";
import ArrowIcon from "../../assets/ArrowIcon.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Image from "next/image";
import useStyles from "./styles";
import Button from "@material-ui/core/Button/Button";
import { FolderOptions, SidebarOptions } from "static/options.static";
import ProfImage from "@/assets/haris.jpg";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Frame121}>
      <Box className={classes.Frame126}>
        <Box className={classes.Frame122}>
          <Box className={classes.Child01}>
            <Button className={classes.Frame31}>
              <Box className={classes.msgContainer}>
                <Image src={Msg} alt="msg" />
                Gmail
              </Box>
              <KeyboardArrowDownIcon />
            </Button>
            <Button className={classes.Frame21}>
              <Box className={classes.msgContainer}>
                <Image src={Inbox} alt="msg" />
                Inbox
              </Box>
              999+
            </Button>
            <Box className={classes.Frame124}>
              {SidebarOptions?.map(
                ({
                  Icon,
                  title,
                  id,
                  unread,
                }: {
                  Icon: any;
                  title: string;
                  id: number;
                  unread: string;
                }) => (
                  <Box key={id} className={classes.optionsContainer}>
                    <Box className={classes.optionWrapper}>
                      <Image src={Icon} alt="" />
                      <Typography className={classes.optionText}>
                        {title}
                      </Typography>
                    </Box>
                    <Typography className={classes.optionText}>
                      {unread}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.Frame125}></Box>

      <Box className={classes.Frame128}>
        <Box className={classes.Frame150}>
          <Box className={classes.Frame152}>
            <Box className={classes.Frame153}>
              <Typography className={classes.Frame154}>Folder</Typography>
            </Box>
            <Typography className={classes.Frame155}>+</Typography>
          </Box>

          {FolderOptions?.map(
            ({
              Icon,
              title,
              id,
              unread,
            }: {
              Icon: any;
              title: string;
              id: number;
              unread: string;
            }) => (
              <Box key={id} className={classes.Frame156}>
                <Box className={classes.Frame157}>
                  <Image src={Icon} alt="sent" />
                  <Typography className={classes.Frame158}>{title}</Typography>
                </Box>
                <Typography className={classes.Frame159}>{unread}</Typography>
              </Box>
            )
          )}
        </Box>

        <Box className={classes.Frame151}>
          <Box className={classes.Frame162}>
              <img className={classes.profImage} src={ProfImage.src} alt="sent" />
              <Box className={classes.Frame163}>
                <Typography className={classes.Frame164}>Haris Kuk</Typography>
                <Typography className={classes.Frame165}>hariskuk@mailbox.com</Typography>
              </Box>
          </Box>
          <Box className={classes.Frame166}>
              <Image src={ArrowIcon} alt="sent" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
