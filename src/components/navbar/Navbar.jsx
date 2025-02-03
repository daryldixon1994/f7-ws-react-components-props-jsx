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
      />
    </div>
  );
};

export default Navbar;
