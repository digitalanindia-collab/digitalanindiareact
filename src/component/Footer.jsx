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
<Link to="#" className="text-light">
Digital Marketing
</Link>
</b>

<ul>
<li><Link to="#">Digital Marketing for Real Estate</Link></li>
<li><Link to="#">Digital Marketing for Hotels</Link></li>
<li><Link to="#">ORM</Link></li>
<li><Link to="#">Digital Marketing By Location</Link></li>
<li><Link to="#">App Store Optimization</Link></li>
<li><Link to="#">Email Marketing</Link></li>
</ul>

</div>

</div>



<div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<Link to="#" className="text-light">
Search Engine Optimization
</Link>
</b>

<ul>
<li><Link to="#">Local Seo</Link></li>
<li><Link to="#">Seo For Small Business</Link></li>
<li><Link to="#">Seo By Industry</Link></li>
<li><Link to="#">Seo By Location</Link></li>
<li><Link to="#">Link Building</Link></li>
<li><Link to="#">Google My Business</Link></li>
</ul>

</div>

</div>



<div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<Link to="#" className="text-light">
Web Designing & Development
</Link>
</b>

<ul>
<li><Link to="#">Website Re-Design</Link></li>
<li><Link to="#">Laravel Website Development</Link></li>
<li><Link to="#">Website Design By Location</Link></li>
<li><Link to="#">Cms Website Development</Link></li>
<li><Link to="#">CodeIgniter Web Development</Link></li>
<li><Link to="#">Landing Page Design</Link></li>
</ul>

</div>

</div>









{/* <div className="col-md-4 col-sm-4 col-lg-25">

<div className="footerlinks">

<b>
<Link to="#" className="text-light">
Packages
</Link>
</b>

<ul>
<li><Link to="#">Seo Packages</Link></li>
<li><Link to="#">SMO Package</Link></li>
<li><Link to="#">ORM Packages</Link></li>
<li><Link to="#">Designing Package</Link></li>
<li><Link to="#">Development Package</Link></li>
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
Info@digitalanindia.com | <Link to="tel:+919599443663" style={{color:"white"}}>+91 9599443663</Link> | <Link to="tel:+918368955806" style={{color:"white"}}>+91 8368955806</Link>
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

 <Link to="#"><i className="fab fa-facebook"></i></Link>
  <Link to="#"><i className="fab fa-twitter"></i></Link>
  <Link to="#"><i className="fab fa-linkedin"></i></Link>
  <Link to="#"><i className="fab fa-instagram"></i></Link>
  <Link to="#"><i className="fab fa-youtube"></i></Link>

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
<Link to="#">Sitemap</Link>
</div>
</div>

</div>

</div>

</div>

</footer>
</>
  );
}