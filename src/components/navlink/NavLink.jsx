import PropTypes from "prop-types";
import "./style.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navlink(props) {
  const [showList, setShowList] = useState(false);
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
    <span
      id="navlink-parent"
      style={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      <NavLink
        style={({ isActive }) => {
          return isActive ? activeStyle : inactiveStyle;
        }}
        id="nav-link"
        to={props.linkPath}
      >
        {props.linkName}
        {/* conditional rendering */}
      </NavLink>
      {props.showIcon && showList ? (
        <TiArrowSortedUp onClick={() => setShowList(!showList)} />
      ) : (
        props.showIcon && (
          <TiArrowSortedDown onClick={() => setShowList(!showList)} />
        )
      )}
      {props.showIcon && showList && (
        <ul id="tutorial-list">
          <li>Tutorial 1</li>
          <li>Tutorial 2</li>
          <li>Tutorial 3</li>
        </ul>
      )}
    </span>
  );
}
// props valdation: propTypes

Navlink.propTypes = {
  linkName: PropTypes.string,
  linkPath: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default Navlink;
