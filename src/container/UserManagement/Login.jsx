import { Card, CardActionArea, Typography } from "@mui/material";
import { useState } from "react";
import Snackbar from "../../components/Snackbar";
import { useHistory } from "react-router-dom";
import OutlinedTextField from "../../components/TextField";
import OutlinedButton from "../../components/Button";

const Login = () => {
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
      localStorage.setItem("scripBox", JSON.stringify(new Array()));
      history.push(`${process.env.PUBLIC_URL}/challenges/view-challenges`);
    }
  };

  const handleOnChange = (e) => {
    setEmpId(e);
  };

  return (
    <>
      <Card>
        <Typography variant="h5" component="strong">
          Challenge Management System
        </Typography>
        <CardActionArea>
          <OutlinedTextField
            value={empId}
            handleChange={handleOnChange}
            label="Employee Id"
          />
          <OutlinedButton handleClick={handleSubmit} label="Sign In" />
        </CardActionArea>
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
    </>
  );
};
export default Login;
