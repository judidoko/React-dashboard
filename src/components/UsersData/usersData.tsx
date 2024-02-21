import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./usersData.scss";
import { Link } from "react-router-dom";

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const usersData = (props: Props) => {
  const handleDelete = (id: number) => {
    // delete
    console.log(id + "has been deleted!");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="viewUser" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="./delete.svg" alt="deleteuser" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="usersData">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default usersData;
