import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Footer() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
<footer className="f1s">

<div className="bluebgsection">
<div className="container wei">

<div className="row">

<div className="col-md-3 col-sm-3 col-lg-24">

<div className="footerlinks">
<div className="splcontemnt">
<b>About Us</b>
<div>
We are a Digitalanindia Technologies team behind many successful digital marketing, websites and data science projects. Based in Delhi, we work with small and large businesses to deliver measurable results. We offer a wide range of professional services to help your business grow and succeed.
</div>
</div>
</div>

</div>


<div className="col-md-9 col-sm-9">

<div className="row">


<div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">
<b>
<a href="#" className="text-light">
Digital Marketing
</a>
</b>

<ul>
<li><a href="#">Digital Marketing for Real Estate</a></li>
<li><a href="#">Digital Marketing for Hotels</a></li>
<li><a href="#">ORM</a></li>
<li><a href="#">Digital Marketing By Location</a></li>
<li><a href="#">App Store Optimization</a></li>
<li><a href="#">Email Marketing</a></li>
</ul>

</div>

</div>



<div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<a href="#" className="text-light">
Search Engine Optimization
</a>
</b>

<ul>
<li><a href="#">Local Seo</a></li>
<li><a href="#">Seo For Small Business</a></li>
<li><a href="#">Seo By Industry</a></li>
<li><a href="#">Seo By Location</a></li>
<li><a href="#">Link Building</a></li>
<li><a href="#">Google My Business</a></li>
</ul>

</div>

</div>



<div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<a href="#" className="text-light">
Web Designing & Development
</a>
</b>

<ul>
<li><a href="#">Website Re-Design</a></li>
<li><a href="#">Laravel Website Development</a></li>
<li><a href="#">Website Design By Location</a></li>
<li><a href="#">Cms Website Development</a></li>
<li><a href="#">CodeIgniter Web Development</a></li>
<li><a href="#">Landing Page Design</a></li>
</ul>

</div>

</div>









{/* <div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<a href="#" className="text-light">
Packages
</a>
</b>

<ul>
<li><a href="#">Seo Packages</a></li>
<li><a href="#">SMO Package</a></li>
<li><a href="#">ORM Packages</a></li>
<li><a href="#">Designing Package</a></li>
<li><a href="#">Development Package</a></li>
</ul>

</div>

</div> */}



</div>

</div>

</div>



<div className="mobilefoterbg">

<div className="row">

<div className="col-lg-8 col-md-9 col-sm-12">

<div className="footerbottomdetail">
<p>
Contact Details :
<strong>
Info@digitalanindia.com | <a href="tel:+919599443663" style={{color:"white"}}>+91 9599443663</a> | <a href="tel:+918368955806" style={{color:"white"}}>+91 8368955806</a>
</strong>
</p>
</div>


<div className="footerbottomdetailnev">

<ul>

<li><Link to="/">Home</Link></li>
<li><Link to="/portfolio">Portfolio</Link></li>
<li><Link to="#">Case Study</Link></li>
<li><Link to="careers">Careers</Link></li>
<li><Link to="#">Terms and conditions</Link></li>
<li><Link to="/blog">Blog</Link></li>
<li><Link to="/contact">Contact Us</Link></li>

</ul>

</div>

</div>


<div className="col-lg-4 col-md-3 col-sm-12">

<p className="sociall">

<b>Follow Us : </b>

 <a href="#"><i className="fab fa-facebook"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
  <a href="#"><i className="fab fa-linkedin"></i></a>
  <a href="#"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-youtube"></i></a>

</p>

</div>

</div>

</div>

</div>
</div>



<div className="container wei">

<div className="copyright">

<div className="row">

<div className="col-sm-6 col-lg-6">
<span>© 2026 Digitalanindia Technologies All Rights Reserved</span>
</div>

<div className="col-sm-6 col-lg-6">
<div className="coprightlinks">
<a href="#">Sitemap</a>
</div>
</div>

</div>

</div>

</div>

</footer>
</>
  );
}