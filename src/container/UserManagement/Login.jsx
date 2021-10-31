import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import Snackbar from "../../components/Snackbar";
import { useHistory } from "react-router-dom";
import OutlinedTextField from "../../components/TextField";
import OutlinedButton from "../../components/Button";
import { withStyles } from "@material-ui/core";
import GlobalStyles from "../../styles/theme-default";

const Login = (props) => {
  const { classes } = props;
  const history = useHistory();
  const [empId, setEmpId] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    variant: "error",
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = () => {
    if (!empId.length) {
      setSnackbar({
        ...snackbar,
        open: true,
        message: "Please enter your employee id",
      });
    } else {
      localStorage.setItem("scripBox", JSON.stringify([]));
      history.push(`${process.env.PUBLIC_URL}/challenges/view-challenges`);
    }
  };

  const handleOnChange = (e) => {
    setEmpId(e);
  };

  return (
    <div className={classes.cardDiv}>
      <Card className={classes.card}>
        <Typography variant="h5" component="strong">
          Challenge Management System
        </Typography>
        <CardMedia className={classes.actionArea}>
          <OutlinedTextField
            className={classes.empIdTextField}
            value={empId}
            handleChange={handleOnChange}
            label="Employee Id"
          />
          <OutlinedButton
            className={classes.signInBtn}
            handleClick={handleSubmit}
            label="Sign In"
          />
        </CardMedia>
      </Card>
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          handleClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={snackbar.message}
          variant={snackbar.variant}
          hide="3000"
        />
      )}
    </div>
  );
};
export default withStyles(GlobalStyles)(Login);
