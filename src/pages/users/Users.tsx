import "./users.scss";
import UsersData from "../../components/UsersData/usersData";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "avater",
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
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
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
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <UsersData slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
