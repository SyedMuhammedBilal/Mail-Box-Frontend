import { makeStyles } from "@material-ui/core";
export default makeStyles({
  MainContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 18px 0px",
    gap: "13px",
    position: "relative",
    width: "456px",
    background: "#1F1F1F",
    border: "1px solid rgba(248, 250, 252, 0.2)",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    gap: "23px",
    width: "420px",
    height: "132px",
  },
  messageDetails: {
    display: "flex",
  },
  messageDetailsTypography: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7F7F7F",
  },
  searchMessageContainer: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
  },
  inboxContainerMain: {},
  emailCartContainer: {
    display: "flex",
    flexDirection: "column",
    
    padding: "24px",
    gap: "16px",
    // width: "420px",
    // height: "168px",
    background: "#353739",
    border: "1px solid rgba(127, 127, 127, 0.2)",
    borderRadius: "8px",
    
  },
  emailInfoContainer: {
    display:"flex",
    justifyContent:"space-between"
  },
  userInfoContainer: {
    display:"flex"
  },
  emailBodyContainer: {},
  imgContainer:{
    height:"49px",
    width:"49px",
    borderRadius:"50%",
    paddingRight:"0.7rem"
  }
});
