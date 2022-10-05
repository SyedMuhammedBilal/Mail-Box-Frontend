import React from "react";
import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

const LoginTextField = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Frame72}>
      <Box>
        <TextField
          className={classes.textFieldContainer}
          id="filled-basic"
          label="Enter Email"
          inputProps={{ className: classes.input }}
          variant="filled"
          InputLabelProps={{
            style: { color: "#7B7B7B" },
          }}
        />
      </Box>
      <Box>
        <TextField
          className={classes.textFieldContainer}
          id="filled-basic"
          label="Password"
          inputProps={{ className: classes.input }}
          variant="filled"
          InputLabelProps={{
            style: { color: "#7B7B7B" },
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginTextField;
