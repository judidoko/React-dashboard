import SinglePage from "../../components/singlePage/SinglePage";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <SinglePage {...singleUser} />
    </div>
  );
};

export default User;
