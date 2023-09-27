import Footer from "./components/footer/Footer";
import GalleryChoice from "./components/gallery/GalleryChoice";
import ArchitectureGallery from "./components/gallery/architecture_gallery/ArchitectureGallery";
import MusiciansGallery from "./components/gallery/musicians_gallery/MusiciansGallery";
import PublicationsGallery from "./components/gallery/publications_gallery/PublicationsGallery";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import TestimonialsOverlay from "./components/overlays/TestimonialsOverlay";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id='gallery-choices'>
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
      <div id='services'>
        <Services />
      </div>
      <div id='architecture-gallery'>
        <ArchitectureGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
