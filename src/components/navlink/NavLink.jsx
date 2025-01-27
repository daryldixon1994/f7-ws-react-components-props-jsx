import "./style.css";

function NavLink(props) {
  console.log(props);
  return (
    <a id="nav-link" href="#">
      {props.linkName}
    </a>
  );
}

export default NavLink;
