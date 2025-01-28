import ReviewItem from "../reviewItem/ReviewItem";
import "./style.css";
function ReviewsList() {
  return (
    <div id="reviews-list">
      <ReviewItem title="Welding Gun" description="12 articles" />
      <ReviewItem title="Ozone Generator" description="8 articles" />
      <ReviewItem title="Socket Organizer" description="10 articles" />
      <ReviewItem title="Gaming Mouses" description="6 articles" />
      <ReviewItem title="Soldering Iron Kits" description="9 articles" />
      <ReviewItem title="Resistor Kits" description="12 articles" />
    </div>
  );
}

export default ReviewsList;
