import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandPage from "./components/LandPage";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Advantage from "./components/Advantage";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Header />
      <LandPage />
      <Partners />
      <Services />
      <Achievements />
      <Advantage />
      <Footer />
    </>
  );
}

export default App;
