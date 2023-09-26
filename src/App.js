import Footer from "./components/footer/Footer";
import GalleryChoice from "./components/gallery/GalleryChoice";
import ArchitectureGallery from "./components/gallery/architecture_gallery/ArchitectureGallery";
import MusiciansGallery from "./components/gallery/musicians_gallery/MusiciansGallery";
import PublicationsGallery from "./components/gallery/publications_gallery/PublicationsGallery";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
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
      <div id='about'>
        <About />
      </div>
      <div id="musicians-gallery">
        <MusiciansGallery />
      </div>
      <TestimonialsOverlay />

      <div id='publications-gallery'>
        <PublicationsGallery />
      </div>
      {/* <Overlay2 /> */}
      <div id='architecture-gallery'>
        <ArchitectureGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
