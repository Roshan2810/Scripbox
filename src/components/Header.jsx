import { AppBar, Toolbar, Typography } from "@mui/material";
import { withStyles } from "@material-ui/core";
import GlobalStyles from "../styles/theme-default";

const Header = (props) => {
  const { title, children, classes } = props;
  return (
    <AppBar
      color="transparent"
      variant="elevation"
      position="static"
      className={classes.appBar}
    >
      <Toolbar>
        <Typography variant="h6" component="strong">
          {title}
        </Typography>
        <div style={{ marginLeft: "auto" }}>{children}</div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(GlobalStyles)(Header);
