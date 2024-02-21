import "./users.scss";
import UsersData from "../../components/UsersData/usersData";
import { GridColDef } from "@mui/x-data-grid";
// import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
import useSWR from "swr";

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
// fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Users = () => {
  // hooks
  const [open, setOpen] = useState(false);
  // fetch data from Api

  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/api/users",
    fetcher
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <UsersData slug="users" columns={columns} rows={data} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
