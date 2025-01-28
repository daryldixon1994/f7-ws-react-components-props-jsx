import MainBtn from "../mainbtn/MainBtn";
import "./style.css";
function Trending() {
  return (
    <div id="trending">
      <div>
        <h1>Trending now</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quibusdam cupiditate neque voluptate tempore dolorum et quas quaerat
          at ipsa.
        </p>
      </div>
      <MainBtn btnColor="white" btnBgColor="#67bdb0" content="View more" />
    </div>
  );
}

export default Trending;
