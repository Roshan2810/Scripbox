import { Button } from "@material-ui/core";

const ContainedButton = (props) => {
  const { label, handleClick, className } = props;
  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default ContainedButton;
