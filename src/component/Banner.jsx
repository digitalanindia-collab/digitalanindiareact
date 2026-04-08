import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from '../component/Navbar';
import video from '../assets/img/digitalanindia1.mp4'

export default function Banner() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="new-home-banner pos-rel-fgtr">
  <Navbar />
  <video className="ndc-vid" autoPlay muted loop>
    <source src={video} type="video/mp4" />
  </video>
  <div className="inner-content-sjjjd">
    <h1>Building brands with AI enabled websites & smarter marketing</h1>
    <p>Experience digital perfection, let’s explore!</p>
    <Link to="/contact" className="annnnde-hyyrh svfffd-rgtt">
      Get Free Consultation
    </Link>
  </div>
</section>
    </>
  );
}