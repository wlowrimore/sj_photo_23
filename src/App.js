import GalleryChoice from "./components/gallery/GalleryChoice";
import MusiciansGallery from "./components/gallery/musicians_gallery/MusiciansGallery";
import PublicationsGallery from "./components/gallery/publications_gallery/PublicationsGallery";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Overlay2 from "./components/overlays/Overlay2";
import TestimonialsOverlay from "./components/overlays/TestimonialsOverlay";

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
      <Overlay2 />
      <div id="musicians-gallery">
        <MusiciansGallery />
      </div>
      <TestimonialsOverlay />

      <div id='publications-gallery'>
        <PublicationsGallery />
      </div>
    </div>
  );
}

export default App;
