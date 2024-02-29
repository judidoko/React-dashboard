import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
// import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import UsersData from "../../components/UsersData/UsersData";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="avatar" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
  },

  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  // hooks
  const [open, setOpen] = useState(false);

  // fetch data from Api
  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8080/api/users").then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <UsersData slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
