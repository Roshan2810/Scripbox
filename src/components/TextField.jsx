import { TextField } from "@material-ui/core";

const OutlinedTextField = (props) => {
  const { label, value, handleChange, id } = props;
  return (
    <TextField
      fullWidth
      color="primary"
      variant="outlined"
      label={label}
      value={value}
      onChange={(e) => handleChange(e.target.value, id)}
    />
  );
};

export default OutlinedTextField;
