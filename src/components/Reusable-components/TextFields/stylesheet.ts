import { makeStyles } from "@material-ui/core";

export default makeStyles({
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
})