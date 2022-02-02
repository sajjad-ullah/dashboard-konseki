import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

import { FaUserShield} from 'react-icons/fa'
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "User",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="UserListItem">
            <img className="UserListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Verify",
      width: 160,
      renderCell: (params) => {
        return (
          <>
           
            <div
              className="UserListEdit"
              
            >
              <p>Verify</p>
              </div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           
            <DeleteOutline
              className="UserListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="UserList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
