// import { Home } from "lucide-react"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import AboutUsSnapshot from "./pages/Home/Components/About"
import FeaturedProjects from "./pages/Home/Components/FeaturedProjects"
import ServicesOffered from "./pages/Home/Components/ServicesOffered"


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <AboutUsSnapshot />
      <FeaturedProjects />
      <ServicesOffered />
      <Footer />
    </div>
  )
}

export default App

