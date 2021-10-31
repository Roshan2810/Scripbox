import { Box } from "@material-ui/core";
import { useState } from "react";
import Header from "../../components/Header";
import OutlinedTextField from "../../components/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ContainedButton from "../../components/Button";
import { useHistory } from "react-router";
import Snackbar from "../../components/Snackbar";
import { uuid } from "uuidv4";
import { withStyles } from "@material-ui/core";
import GlobalStyles from "../../styles/theme-default";

const CreateNewChallenge = (props) => {
  const history = useHistory();
  const { classes } = props;
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    variant: "error",
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    autoComplete: [],
  });

  const handleChange = (value, property) => {
    setChallenge({ ...challenge, [property]: value });
  };

  const options = [
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "tech",
      label: "Technology",
    },
  ];

  const clearAll = () => {
    setChallenge({
      title: "",
      description: "",
      autoComplete: [],
    });
  };

  const handleSubmit = () => {
    if (!challenge.title || !challenge.autoComplete.length) {
      setSnackbar({
        ...snackbar,
        open: true,
        message: "Please enter title and select atleast one tag",
      });
    } else {
      const getItem = Object.assign(
        [],
        JSON.parse(localStorage.getItem("scripBox"))
      );

      getItem.push({
        id: uuid(),
        title: challenge.title,
        description: challenge.description,
        upvoteCount: 0,
        creationDate: new Date().toUTCString(),
      });
      localStorage.setItem("scripBox", JSON.stringify(getItem));
      history.push(`${process.env.PUBLIC_URL}/challenges/view-challenges`);
    }
  };

  const cancel = () => {
    history.push(`${process.env.PUBLIC_URL}/challenges/view-challenges`);
  };

  return (
    <>
      <Header title="Create New Challenge" />
      <Box
        className={classes.box}
        component="div"
        // sx={{
        //   "& > :not(style)": { m: 1, width: "100%" },
        // }}
        noValidate
        autoComplete="off"
      >
        <OutlinedTextField
          id="title"
          label="Title"
          value={challenge.title}
          handleChange={handleChange}
          className={classes.challengeTextField}
        />
        <OutlinedTextField
          id="description"
          label="Description"
          value={challenge.description}
          handleChange={handleChange}
          className={classes.challengeTextField}
        />
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            multiple
            fullWidth
            id="tags-outlined"
            className={classes.challengeTextField}
            options={options}
            value={challenge.autoComplete}
            getOptionLabel={(option) => option.label}
            onChange={(e, value) => {
              handleChange(value, "autoComplete");
            }}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                label="Tags"
                placeholder="Tags"
              />
            )}
          />
        </Stack>
        <ContainedButton handleClick={cancel} label="Cancel" />
        <ContainedButton
          className={classes.button}
          handleClick={clearAll}
          label="Clear"
        />
        <ContainedButton
          className={classes.button}
          handleClick={handleSubmit}
          label="Submit"
        />
      </Box>
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          handleClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={snackbar.message}
          variant={snackbar.variant}
          hide={3000}
        />
      )}
    </>
  );
};
export default withStyles(GlobalStyles)(CreateNewChallenge);
