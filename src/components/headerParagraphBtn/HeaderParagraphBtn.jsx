import PropTypes from "prop-types";
import MainBtn from "../mainbtn/MainBtn";
import "./style.css";
function HeaderParagraphBtn(props) {
  const styling = {
    backgroundColor: props.bgColor,
  };
  return (
    <div style={styling} id="header-paragraph-btn">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <MainBtn btnColor="white" btnBgColor="black" content="Learn more" />
    </div>
  );
}

HeaderParagraphBtn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
};

export default HeaderParagraphBtn;
