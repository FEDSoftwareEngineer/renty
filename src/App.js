import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Loading from "./components/Loading";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
