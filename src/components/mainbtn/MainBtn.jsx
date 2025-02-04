import PropTypes from "prop-types";
import "./style.css";

function MainBtn({
  btnColor,
  btnBgColor,
  content,
  setShowProjects,
  showProjects,
  setShowForm,
  showForm,
}) {
  // props.btnColor = "black"
  console.log("Main btn re-rendered");
  const btnStyle = {
    color: btnColor,
    backgroundColor: btnBgColor,
  };

  return (
    <span>
      <button
        onClick={() => {
          {
            setShowProjects && setShowProjects(!showProjects);
          }
          {
            setShowForm && setShowForm(!showForm);
          }
        }}
        style={btnStyle}
        id="main-btn"
      >
        {content}
      </button>
    </span>
  );
}

MainBtn.propTypes = {
  btnColor: PropTypes.string,
  btnBgColor: PropTypes.string,
  content: PropTypes.string,
  setShowProjects: PropTypes.func,
  setShowForm: PropTypes.func,
  showProjects: PropTypes.bool,
  showForm: PropTypes.bool,
};

export default MainBtn;
