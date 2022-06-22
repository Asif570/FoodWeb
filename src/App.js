import "./App.css";
import Aboutme from "./Components/Aboutme/Aboutme";
import Hero from "./Components/HeroCom/Hero";
import Recipe from "./Components/Recipe/Recipe";

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
      {/* footer section  */}
    </div>
  );
}

export default App;
