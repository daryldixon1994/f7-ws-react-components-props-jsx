import PropTypes from "prop-types";
import "./style.css";
import { TiArrowSortedDown } from "react-icons/ti";
function NavLink(props) {
  console.log(props);
  // props.showIcon
  // ternary operator
  // if (props.showIcon) {
  //   return (
  //     <a id="nav-link" href="#">
  //       {props.linkName}
  //       {/* conditional rendering */}
  //       <TiArrowSortedDown />
  //     </a>
  //   );
  // } else {
  //   return (
  //     <a id="nav-link" href="#">
  //       {props.linkName}
  //     </a>
  //   );
  // }
  return (
    <a id="nav-link" href="#">
      {props.linkName}
      {/* conditional rendering */}
      {props.showIcon && <TiArrowSortedDown />}
    </a>
  );
}
// props valdation: propTypes

NavLink.propTypes = {
  linkName: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default NavLink;
