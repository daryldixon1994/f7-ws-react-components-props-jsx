import PropTypes from "prop-types";
import "./style.css";
function ReviewItem(props) {
  return (
    <div id="review-item">
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
    </div>
  );
}

ReviewItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ReviewItem;
