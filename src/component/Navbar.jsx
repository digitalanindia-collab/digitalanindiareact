import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import logo from '../assets/img/digitalindialogo.webp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (VERY IMPORTANT)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-default navbar-fixed-top dis-none ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="col-md-3">
            <div className="new-logo">
              <Link className="navbar-brand deks-see" to="/">
                <img
                  src={ logo}
                  alt="Digitalanindia" width="75"
                />
              </Link>
              <Link className="navbar-brand deks-see-1" to="/">
                <img
                  src={ logo }
                  alt="Digitalanindia" width="75"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="menubar-jjj">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                  <li className="mainli">
                    <Link className="maina" to="/">Home</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/about">About Us</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/services">Services</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/packages">Packages</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/blog">Blog</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/careers">Career</Link>
                  </li>
                  <li className="mainli">
                    <Link className="maina" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="right-phone-dnh">
                <i className="fa fa-phone"></i><a href="tel:+919599443663" style={{color:"white"}}>+91 9599443663</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}