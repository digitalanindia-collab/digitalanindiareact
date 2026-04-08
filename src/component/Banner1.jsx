
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from '../component/Navbar';
import banner1 from '../assets/img/banner1.png'

export default function Banner() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      <section className="new-home-banner pos-rel-fgtr1">
    <Navbar />
      <img src={banner1} alt="Digitalanindia" style={{ height: "300px",width: "100%"}}/>
      </section>
    </>
  );
}