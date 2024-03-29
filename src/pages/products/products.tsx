import { useState } from "react";
import "./products.scss";
import UsersData from "../../components/UsersData/UsersData";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

// Columns
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="img" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 100,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
  },

  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <UsersData slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
