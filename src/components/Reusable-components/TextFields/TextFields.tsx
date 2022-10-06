import { Box, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const SignTextField = ({ placeholder, width = "auto" }: { placeholder: string, width?: string }) => {
  const classes = useStyles();
  return (
    <Box>
      <TextField
        className={classes.textFieldContainer}
        id="filled-basic"
        placeholder={placeholder}
        inputProps={{ className: classes.input }}
        variant="filled"
        style={{ width: width }}
        InputLabelProps={{
          style: { color: "#7B7B7B" },
        }}
      />
    </Box>
  );
};

export default SignTextField;
