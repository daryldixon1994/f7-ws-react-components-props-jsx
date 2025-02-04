import PropTypes from "prop-types";
import MainBtn from "../mainbtn/MainBtn";
import "./style.css";
function HeaderParagraphBtn({
  bgColor,
  title,
  description,
  setShowProjects,
  showProjects,
}) {
  
  const styling = {
    backgroundColor: bgColor,
  };
  return (
    <div style={styling} id="header-paragraph-btn">
      <h1>{title}</h1>
      <p>{description}</p>
      <MainBtn
        btnColor="white"
        btnBgColor="black"
        content={showProjects ? "Hide Details" : "Learn more"}
        setShowProjects={setShowProjects}
        showProjects={showProjects}
      />
    </div>
  );
}

HeaderParagraphBtn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  setShowProjects: PropTypes.func,
  showProjects: PropTypes.bool,
};

export default HeaderParagraphBtn;
