import { Link } from "react-router-dom";
import "./menu.scss";
// import { MdHome } from "react-icons/md";
// import { MdPerson } from "react-icons/md";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>

          {item.listItems.map((listItem) => (
            <Link to="/" className="listItem" key={listItem.id}>
              <img className="icon" src={listItem.icon} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
