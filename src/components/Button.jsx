import { Button } from "@material-ui/core";

const ContainedButton = (props) => {
  const { label, handleClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {label}
    </Button>
  );
};

export default ContainedButton;
