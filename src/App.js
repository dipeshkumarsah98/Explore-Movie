import { Navbar } from "./Components/NavBar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import PopularMovies from "./Pages/index";
import { Route, Routes } from "react-router-dom";
import Top250Movies from "./Pages/Top250Movies";
import ComingSoon from "./Pages/ComingSoon";
import InTheaters from "./Pages/InTheaters";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<PopularMovies />} />
        <Route path="top-250-movies" element={<Top250Movies />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="in-theater" element={<InTheaters />} />
        <Route path="movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
