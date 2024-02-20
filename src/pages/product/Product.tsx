import SinglePage from "../../components/singlePage/SinglePage";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  return (
    <div className="product">
      <SinglePage {...singleProduct} />
    </div>
  );
};

export default Product;
