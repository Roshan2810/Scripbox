import { AppBar, Toolbar, Typography } from "@mui/material";
const Header = (props) => {
  const { title, children } = props;
  return (
    <AppBar
      color="transparent"
      variant="elevation"
      position="static"
      style={{ marginBottom: "2%" }}
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

export default Header;
