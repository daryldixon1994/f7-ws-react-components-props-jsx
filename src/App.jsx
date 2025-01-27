import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Reviews from "./components/reviews/Reviews";
import Trending from "./components/trending/Trending";
import "./App.css";
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Trending */}
      <Trending />
      {/* Reviews */}
      <Reviews />
      {/* Projects */}
      <Projects />
    </div>
  );
}

export default App;
