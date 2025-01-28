import ReviewsList from "../reviewsList/ReviewsList";
import "./style.css";
function Reviews() {
  return (
    <div id="reviews">
      {/* HeaderParagraphBtn */}
      <div id="reviews-intro">
        <h1>The 6 best tools and accessories reviews</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          voluptates sequi quo aliquam facere, beatae nisi voluptas quia
          dolores! Est!
        </p>
      </div>
      {/* ReviewsList */}
      <ReviewsList />
    </div>
  );
}

export default Reviews;
