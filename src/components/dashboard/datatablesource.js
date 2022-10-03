
export const userColumns = [
  { field: "id", headerName: "ID", width: 400 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 100,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 100,
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "react",
    headerName: "Process",
    width: 100,
  },
  {
    field: "viewCount",
    headerName: "Viewed",
    width: 100,
  },
];

//temporary data







