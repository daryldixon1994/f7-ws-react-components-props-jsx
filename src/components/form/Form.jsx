import PropTypes from "prop-types";
import "./style.css";
import { IoIosClose } from "react-icons/io";

function FormQ({ setShowForm }) {
  return (
    <form>
      <IoIosClose
        id="close-icon"
        color="white"
        size={30}
        onClick={() => {
          setShowForm(false);
        }}
      />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="message" />
      <button>Send</button>
    </form>
  );
}
FormQ.propTypes = {
  setShowForm: PropTypes.func,
};
export default FormQ;
