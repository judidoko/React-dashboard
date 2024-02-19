import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

interface Props {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Add user/product function
const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // add new item
  //   axios.post(`.api.${slug}s`, {})
};
const AddUser = (props: Props) => {
  return (
    <div className="addUser">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={HandleSubmit}>
          {props.columns
            .filter((item) => item.field != "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
