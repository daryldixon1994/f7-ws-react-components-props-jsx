import PropTypes from "prop-types";
import MainBtn from "../mainbtn/MainBtn";
import NavLink from "../navlink/NavLink";
import "./style.css";

const Navbar = ({ setShowForm, showForm }) => {
  // const titleStyle = {
  //   color: "red",
  //   fontSize: "1.5rem",
  // };
  // let mainColor = "black";
  console.log("Navbar re-rendered");
  function notification(btnMessage) {
    console.log(btnMessage);
  }
  const links = [
    {
      linkName: "Home",
      linkPath: "/",
      showIcon: false,
    },
    {
      linkName: "Tutorials",
      linkPath: "/tutorials",
      showIcon: true,
    },
    {
      linkName: "Reviews",
      linkPath: "/reviews",
      showIcon: false,
    },
    {
      linkName: "News",
      linkPath: "/news",
      showIcon: false,
    },
    {
      linkName: "Login",
      linkPath: "/login",
      showIcon: false,
    },
    {
      linkName: "Register",
      linkPath: "/register",
      showIcon: false,
    },
  ];
  return (
    <div id="navbar-container">
      {/* Title */}
      <h1>ClaimM4</h1>
      {/* 6 links */}
      <div id="navlinks">
        {/* <NavLink linkName="Home" />
        <NavLink linkName="Tutorials" showIcon={true} />
        <NavLink linkName="Reviews" />
        <NavLink linkName="News" />
        <NavLink linkName="Arounds" />
        <NavLink linkName="DIY" /> */}
        {links.map((elt, i) => (
          <NavLink key={i} {...elt} />
        ))}
      </div>
      {/* MainBtn */}
      <MainBtn
        btnColor="black"
        btnBgColor="white"
        content="ASK A QUESTION"
        notification={notification}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </div>
  );
};

Navbar.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
};

export default Navbar;
