import { makeStyles } from "@material-ui/core";

export default makeStyles({
  Frame72: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "1.375rem",
  },
  textFieldContainer: {
    "& .MuiFilledInput-input": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "17px 19px",
      paddingRight: "12rem",
      gap: "10px",
      // width: "400px",
      background: "#353739",
      borderRadius: "11px",
    },
    "& label:focus, input:focus": {
      color: "#fff",
    },
  },
  input: {
    color: "white",
  },
  forgotPasswordContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "0px 0px 30px 252px",
    gap: "10px",
  },
  forgotPassword: {
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "21px",
    color: "#CBCBCB",
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "17px 19px",
    gap: "10px",
    background: "#006AD4", 
    borderRadius: "11px",
    color: "#fff",
    width: "-webkit-fill-available",
    fontWeight: 500, 
    fontSize: "18px", 
    lineHeight: "27px",
    textTransform: "none",
  },
  orContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 0px",
    gap: "10px"
  },
  or: {
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "21px",
    color: "#CBCBCB"
  },
  line: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    border: "0.5px solid #CBCBCB",
    width: "8.1rem",
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "24px"
  },
  socialContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px 35px",
    gap: "10px",
    width: "122px",
    height: "64px",
    border: "1px solid #737373",
    borderRadius: "10px"
  },
  
});
