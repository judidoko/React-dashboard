import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./usersData.scss";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const UsersData = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8080/api/${props.slug}/${id}`, {
        method: "delete",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${props.slug}`] });
    },
  });

  const handleDelete = (id: number) => {
    // delete
    mutation.mutate(id);
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

export default UsersData;
