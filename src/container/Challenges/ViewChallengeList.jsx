import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@material-ui/core";
import Header from "../../components/Header";
import { useHistory } from "react-router";
import OutlinedButton from "../../components/Button";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { IconButton } from "@material-ui/core";
import { useState } from "react";
import GlobalStyles from "../../styles/theme-default";

const ViewChallengeList = (props) => {
  const { classes } = props;
  const history = useHistory();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("scripBox"))
  );

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FF0000",
          },
        },
        MUIDataTable: {
          root: {
            margin: "0 15px",
          },
        },
      },
    });

  const handleUpVote = (id) => {
    const updatedData = data.map((val) => {
      if (id === val.id) {
        val.upvoteCount = val.upvoteCount + 1;
      }
      return val;
    });
    localStorage.setItem("scripBox", JSON.stringify(updatedData));
    setData(updatedData);
  };

  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
        sort: false,
        display: "excluded",
      },
    },
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
        customBodyRender: (value, tableMeta, updatedValue) => {
          return (
            <IconButton onClick={() => handleUpVote(tableMeta.rowData[0])}>
              <ThumbUpAltIcon color="primary" />
            </IconButton>
          );
        },
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
    selectableRows: "none",
    rowsPerPageOptions: [10, 15, 100],
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
        <OutlinedButton
          className={classes.button}
          handleClick={handleLogout}
          label="Logout"
        />
      </Header>
      <div className={classes.tableDiv}>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title="Challenge List"
            options={options}
            columns={columns}
            data={data}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
export default withStyles(GlobalStyles)(ViewChallengeList);
