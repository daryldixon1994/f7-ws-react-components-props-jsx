import { useState } from "react";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Reviews from "../../components/reviews/Reviews";
import Trending from "../../components/trending/Trending";

function LandingPage() {
  // initialize counter state
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Mohamed Anwar");
  // getter (state variable)
  // setter (state function)

  const handleClick = () => {
    setName("Heisenberg");
  };

  return (
    <div>
      <Hero />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Hello {name}</h1>
        <button onClick={handleClick}>Say my name</button>
      </div>
      <Trending />
      <Reviews />
      <Projects />
    </div>
  );
}

export default LandingPage;
