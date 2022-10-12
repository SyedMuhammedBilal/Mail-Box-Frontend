import { makeStyles } from "@material-ui/core";
export default makeStyles({
  MainContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    height: "100%",
    alignItems: "center",
    padding: "22px 18px 0px",
    gap: "13px",
    position: "fixed",
    left: "300px",
    top: "0px",
    width: "550px",
    background: "#1F1F1F",
    border: "1px solid rgba(248, 250, 252, 0.2)",
  },
  scrollableDiv: {
    overflowY: "scroll",
    height: "1024px !important",
    position: "relative",
    width: "-webkit-fill-available",
    "&::-webkit-scrollbar": {
      display: "none !important",
    },
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "23px",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "6px",
  },
  textFieldContainer: {
    width: "inherit",
    background: "#353739",
    borderRadius: "8px",
    color: "#fff",
    "& .MuiFilledInput-input": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 8px",
      gap: "95px",
    color: "#fff",
      "& label:focus, input:focus": {
        color: "#fff",
      },
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none !important",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none !important",
    },
  },
  editContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "11px",
    gap: "95px",
    // width: "48px",
    // height: "48px",
    background: "#353739",
    borderRadius: "8px",
  },
  headerLeftTop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "10px",
  },
  inboxTypo: {
    fontWeight: 510,
    fontSize: "32px",
    lineHeight: "38px",
    color: "#F8FAFC",
  },
  messageDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
  },
  messageDetailsTypography: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7F7F7F",
  },
  searchMessageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "13px",
    gap: "10px",
    width: "inherit",
  },
  inboxContainerMain: {
    overflowY: "scroll",
    height: "1024px !important",
    position: "relative",
    "&::-webkit-scrollbar": {
      display: "none !important",
    },
  },
  emailCartContainer: {
    display: "flex",
    flexDirection: "column",

    padding: "24px",
    gap: "16px",
    // width: "420px",
    // height: "168px",
    // background: "#353739",
    // border: "1px solid rgba(127, 127, 127, 0.2)",
    borderRadius: "8px",
  },
  emailInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "inherit",
  },
  userInfoContainer: {
    display: "flex",
  },
  emailBodyContainer: {
    paddingLeft: "50px",
  },
  imgContainer: {
    height: "49px",
    width: "49px",
    borderRadius: "50%",
    paddingRight: "0.7rem",
  },
});
