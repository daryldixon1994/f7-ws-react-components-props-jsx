import PropTypes from "prop-types";
import "./style.css";
function MainBtn(props) {
  // props.btnColor = "black"
  let message = "Hello from the main btn";
  const btnStyle = {
    color: props.btnColor,
    backgroundColor: props.btnBgColor,
  };
  return (
    <button
      onClick={() => props.notification(message)}
      style={btnStyle}
      id="main-btn"
    >
      {props.content}
    </button>
  );
}

MainBtn.propTypes = {
  btnColor: PropTypes.string,
  btnBgColor: PropTypes.string,
  notification: PropTypes.func,
  content: PropTypes.string,
};

export default MainBtn;
