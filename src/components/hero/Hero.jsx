import HeaderParagraphBtn from "../headerParagraphBtn/HeaderParagraphBtn";
import ImageWithBackground from "../imageWithBackground/ImageWithBackground";
import "./style.css";
function Hero() {
  return (
    <div id="hero">
      {/* ImageWithBackground */}
      <ImageWithBackground
        imgBg="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={30}
      />
      {/* HeaderParagraphBtn */}

      <HeaderParagraphBtn
        title="Electronic FAQ"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis earum recusandae asperiores nihil labore perferendis."
        bgColor="rgb(241, 241, 241)"
      />
    </div>
  );
}

export default Hero;
