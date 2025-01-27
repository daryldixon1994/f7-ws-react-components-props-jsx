import MainBtn from "../mainbtn/MainBtn";
import NavLink from "../navlink/NavLink";
import "./style.css";

const Navbar = () => {
  // const titleStyle = {
  //   color: "red",
  //   fontSize: "1.5rem",
  // };
  return (
    <div id="navbar-container">
      {/* Title */}
      <h1>ClaimM4</h1>
      {/* 6 links */}
      <div id="navlinks">
        <NavLink linkName="Home" />
        <NavLink linkName="Tutorials" />
        <NavLink linkName="Reviews" />
        <NavLink linkName="News" />
        <NavLink linkName="Arounds" />
        <NavLink linkName="DIY" />
      </div>
      {/* MainBtn */}
      <MainBtn btnColor="black" btnBgColor="white" content="ASK A QUESTION" />
    </div>
  );
};

export default Navbar;
