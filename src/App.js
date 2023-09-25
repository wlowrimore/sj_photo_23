import GalleryChoice from "./components/gallery/GalleryChoice";
import MusiciansGallery from "./components/gallery/musicians_gallery/MusiciansGallery";
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

        <GalleryChoice />
      </div>
      <div id="musicians-gallery">
        <MusiciansGallery />
      </div>
    </div>
  );
}

export default App;
