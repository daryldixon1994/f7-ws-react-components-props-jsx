import PropTypes from "prop-types";
import "./style.css";
function ImageWithBackground(props) {
  console.log(props);
  // props.imgBg
  const styling = {
    backgroundImage: `url(${props.imgBg})`,
    width: `${props.width}%`,
  };
  return <div style={styling} id="img-bg"></div>;
}

ImageWithBackground.propTypes = {
  imgBg: PropTypes.string,
  width: PropTypes.number,
};
export default ImageWithBackground;
