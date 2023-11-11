import Cards from "./components/Cards"
import Destinations from "./components/Destinations"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import Places from "./components/Places"
import Testimonials from "./components/Testimonials"
import "./App.css";
import GetApp from "./components/GetApp"
import Footer from "./components/Footer"


function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cards />
      <Destinations />
      <Offer />
      <Places />
      <Testimonials />
      <GetApp />
      <Footer />
    </main>
  )
}

export default App
