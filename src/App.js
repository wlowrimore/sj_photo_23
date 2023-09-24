import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div>

        <Home />
      </div>
      <div>

        <Gallery />
      </div>
    </div>
  );
}

export default App;
