// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AppRoutes from "./routes/routes";
import ScrollToTop from "./middleware/ScrollToTop";

const App = () => {
  return (
    <>

      <ScrollToTop /> {/* ✅ Middleware */}
      <Navbar />
      <AppRoutes />
      <Footer />

    </>
  );
};

export default App;
