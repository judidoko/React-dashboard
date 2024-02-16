import "./footer.scss";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <span>JD Admin</span>
      <span>
        <PiCopyrightThin /> JD Store Admin Dashboard
      </span>
    </div>
  );
};

export default Footer;
