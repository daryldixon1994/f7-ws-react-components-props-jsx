import ReviewItem from "../reviewItem/ReviewItem";
import "./style.css";
function ReviewsList() {
  const data = [
    {
      title: "Welding Gun",
      description: "12 articles",
    },
    {
      title: "Ozone Generator",
      description: "12 articles",
    },
    {
      title: "Socket Organizer",
      description: "10 articles",
    },
    {
      title: "Gaming Mouses",
      description: "6 articles",
    },
    {
      title: "Soldering Iron Kits",
      description: "9 articles",
    },
    {
      title: "Resistor Kits",
      description: "12 articles",
    },
  ];
  return (
    <div id="reviews-list">
      {data.map((elt, i) => (
        <ReviewItem key={i} title={elt.title} description={elt.description} />
      ))}
    </div>
  );
}

export default ReviewsList;
