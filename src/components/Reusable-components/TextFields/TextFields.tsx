import { Box, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const SignTextField = ({
  placeholder,
  width = "auto",
  value,
  onChange,
  name,
  type,
}: {
  placeholder: string;
  width?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
}) => {
  const classes = useStyles();
  return (
    <Box>
      <TextField
        className={classes.textFieldContainer}
        id="filled-basic"
        autoComplete="off"
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        variant="filled"
        style={{ width: width }}
        InputLabelProps={{
          style: { color: "#7B7B7B" },
        }}
        inputProps={{ form: { autoComplete: "off" }, className: classes.input }}
      />
    </Box>
  );
};

export default SignTextField;
