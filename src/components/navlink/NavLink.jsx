import PropTypes from "prop-types";
import "./style.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink } from "react-router-dom";


function Navlink(props) {
  const activeStyle = {
    all: "unset",
    boxSizing: "border-box",
    fontSize: "1.3rem",
    fontWeight: 400,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#ff0033",
  };
  const inactiveStyle = {
    all: "unset",
    boxSizing: "border-box",
    fontSize: "1.2rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? activeStyle : inactiveStyle;
      }}
      id="nav-link"
      to={props.linkPath}
    >
      {props.linkName}
      {/* conditional rendering */}
      {props.showIcon && <TiArrowSortedDown />}
    </NavLink>
  );
}
// props valdation: propTypes

Navlink.propTypes = {
  linkName: PropTypes.string,
  linkPath: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default Navlink;
