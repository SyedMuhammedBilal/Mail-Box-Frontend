import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const SignButton = ({ label }: { label: string }) => {
  const classes = useStyles();
  return <Button className={classes.loginButton}>{label}</Button>;
};

export default SignButton;
