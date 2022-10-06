import { makeStyles } from "@material-ui/core";

export default makeStyles({
    textFieldContainer: {
        "& .MuiFilledInput-input": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "17px 80px 17px 19px",
            gap: "10px",
            background: "#353739", 
            borderRadius: "11px",
            color: "#fff"
        },
        "& label:focus, input:focus": {
            color: "#fff",
        },
        "& .MuiFilledInput-root": {
            width: "199px",
        }
    },
})