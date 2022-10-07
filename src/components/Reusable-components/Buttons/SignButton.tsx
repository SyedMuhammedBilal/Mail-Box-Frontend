import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const SignButton = ({ label, onClick }: { label: string; onClick: any }) => {
  const classes = useStyles();
  return <Button onClick={onClick} className={classes.loginButton}>{label}</Button>;
};

export default SignButton;
