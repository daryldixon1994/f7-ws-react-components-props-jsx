import MainBtn from "../mainbtn/MainBtn";
import NavLink from "../navlink/NavLink";
import "./style.css";

const Navbar = () => {
  // const titleStyle = {
  //   color: "red",
  //   fontSize: "1.5rem",
  // };
  // let mainColor = "black";
  function notification(btnMessage) {
    console.log(btnMessage);
  }
  return (
    <div id="navbar-container">
      {/* Title */}
      <h1>ClaimM4</h1>
      {/* 6 links */}
      <div id="navlinks">
        <NavLink linkName="Home" />
        <NavLink linkName="Tutorials" showIcon={true} />
        <NavLink linkName="Reviews" />
        <NavLink linkName="News" />
        <NavLink linkName="Arounds" />
        <NavLink linkName="DIY" />
      </div>
      {/* MainBtn */}
      <MainBtn
        btnColor="black"
        btnBgColor="white"
        content="ASK A QUESTION"
        notification={notification}
      />
    </div>
  );
};

export default Navbar;
