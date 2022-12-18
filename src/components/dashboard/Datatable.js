import "./datatable.scss";
import {
  DataGrid,
  GridToolbar
} from "@mui/x-data-grid";
import { userColumns} from "./datatablesource";
//userRows 
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
// import { useState } from "react";

const Datatable = (props) => {
  // const [data, setData] = useState(props.data);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // function CustomToolbar() {
  //   return (
  //     <GridToolbarContainer>
  //       <GridToolbarExport />
  //     </GridToolbarContainer>
  //   );
  // }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/applicantdetails/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Applications</div>
      <DataGrid
        className="datagrid"
        rows={props.data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        components={{
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },}}
      />
    </div>
  );
};

export default Datatable;
