import "./style.css";
function MainBtn(props) {
  // props.btnColor = "black"
  const btnStyle = {
    color: props.btnColor,
    backgroundColor: props.btnBgColor,
  };
  return (
    <button style={btnStyle} id="main-btn">
      {props.content}
    </button>
  );
}

export default MainBtn;
