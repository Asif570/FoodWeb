import "./App.css";
import Aboutme from "./Components/Aboutme/Aboutme";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/HeroCom/Hero";
import Recipe from "./Components/Recipe/Recipe";
import Stutas from "./Components/Stutas/Stutas";

function App() {
  return (
    <div className="App">
      {/* hero section */}
      <Hero />
      {/* about me section  */}
      <Aboutme />
      {/* reciepe section  */}
      <Recipe />
      {/* stutas section  */}
      <Stutas />
      {/* footer section  */}
      <Footer />
    </div>
  );
}

export default App;
