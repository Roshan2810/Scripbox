import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import OutlinedButton from "../../components/Button";

const ViewChallengeList = () => {
  const history = useHistory();
  const data = JSON.parse(localStorage.getItem("scripBox"));

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FF0000",
          },
        },
      },
    });

  const columns = [
    {
      name: "title",
      label: "Challenge Name",
      options: {
        sort: false,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        sort: false,
      },
    },
    {
      name: "upvoteCount",
      label: "Upvote Count",
      options: {
        sort: true,
      },
    },
    {
      name: "creationDate",
      label: "Creation Date",
      options: {
        sort: true,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
      },
    },
  ];

  const options = {
    print: false,
    search: false,
    download: false,
    filter: false,
    viewColumns: false,
    checkbox: false,
    selectableRows: false,
  };

  const handleClick = () => {
    history.push(`${process.env.PUBLIC_URL}/challenges/new-challenge`);
  };

  const handleLogout = () => {
    localStorage.setItem("scripBox", []);
    history.push(`${process.env.PUBLIC_URL}/`);
  };

  return (
    <div>
      <Header title={"Challenge Management System"}>
        <OutlinedButton
          handleClick={handleClick}
          label="Create New Challenge"
        />
        <OutlinedButton handleClick={handleLogout} label="Logout" />
      </Header>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title="Challenge List"
          options={options}
          columns={columns}
          data={data}
        />
      </ThemeProvider>
    </div>
  );
};
export default ViewChallengeList;
