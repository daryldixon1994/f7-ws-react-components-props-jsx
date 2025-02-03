import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Reviews from "./pages/reviews/Reviews";
import News from "./pages/news/News";
import Tutorials from "./pages/tutorials/Tutorials";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";
import NotFound from "./pages/notFound/NotFound";
function App() {
  // route ==> page ==> component
  // Routes, Route

  return (
    <div>
      <Navbar />
      {/* <Hero />
      <Trending />
      <Reviews />
      <Projects /> */}
      <Routes>
        {/* landing page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/news" element={<News test="mohammed" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
// rendering
// mounting
// displaying
