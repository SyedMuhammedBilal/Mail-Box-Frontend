import { makeStyles } from "@material-ui/core/styles";

// -> gaps

export default makeStyles({
  emailMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px 0px 15px",
    gap: "33px",
    position: "fixed",
    width: "-webkit-fill-available",
    height: "100%",
    left: "849px",
    top: "0px",
    background: "#1F1F1F",
    borderLeft: "1px solid #3D3D3D",
  },
  optionsContainer: {
    display: "flex",
    width: "inherit",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "21px 0px 15px",
    gap: "14px",
    borderBottom: "1px solid rgba(248, 250, 252, 0.2)",
  },
  optionsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0px 0px 0px 3px",
    gap: "70px",
    width: "inherit",
  },
  optionsBox1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "10px",
    cursor: "pointer",
  },
  optionsBox2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "12px",
    cursor: "pointer",
  },
  optionsBox3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "12px",
    cursor: "pointer",
  },
  optionsBox4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "12px",
    cursor: "pointer",
  },
  optionsBox4Typo: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7F7F7F",
    cursor: "pointer",
  },
  optionsBox5: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "17px",
    cursor: "pointer",
  },
  scrollableDiv: {
    overflowY: "scroll",
    height: "1024px !important",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "1rem",
    position: "relative",
    width: "-webkit-fill-available",
    "&::-webkit-scrollbar": {
      display: "none !important",
    },
  },
  userEmailDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "17px 30px",
    gap: "17px",
    width: "inherit",
  },
  userEmailDetailsLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
  },
  profImage: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
  },
  userEmailDetailsRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "inherit",
    gap: '2px'
  },
  userEmailDetailsRightTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    width: "inherit",
  },
  userEmailDetailsRightTopTypo1: {
    fontWeight: 510,
    fontSize: "18px",
    lineHeight: "21px",
    color: "#F8FAFC",
  },
  userEmailDetailsRightTopTypo2: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7F7F7F",
  },
  userEmailDetailsRightBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    width: "inherit",
  },
  userEmailDetailsRightBottomTypo: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#7F7F7F",
  },
});
