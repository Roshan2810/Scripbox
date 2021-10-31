const globalStyles = (theme) => ({
  appBar: {
    marginBottom: "2vh",
  },
  button: {
    marginLeft: "2vw",
  },
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  signInBtn: {
    display: "flex",
    width: "50%",
    marginTop: "2vh",
    margin: "auto",
  },
  empIdTextField: {
    marginTop: "2vh",
    display: "flex",
    margin: "auto",
    width: "50%",
  },
  card: {
    minWidth: "50%",
    textAlign: "center",
    "&.MuiPaper-root": {
      boxShadow: "none",
    },
  },
  tableDiv: {
    margin: "0 5vw",
  },
  challengeTextField: {
    display: "flex",
    width: "27%",
    marginBottom: "2vh",
  },
  box: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default globalStyles;
