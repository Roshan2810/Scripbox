import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomizedSnackbars = (props) => {
  return (
    <div>
      <Snackbar
        autoHideDuration={props.hide ? props.hide : 20000}
        open={props.open}
        onClose={props.handleClose}
        anchorOrigin={props.anchorOrigin}
      >
        <Alert
          elevation={3}
          variant="filled"
          onClose={props.handleClose}
          severity={props.variant}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
