import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span style={{ fontSize: "30px" }}>JD Store</span>
      </div>
      <div className="icons">
        <FaSearch className="icon" />
        <AiOutlineAppstore className="icon" />
        <FaExpand className="icon" />
        <div className="notification">
          <IoMdNotifications className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile-photo"
          />
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
