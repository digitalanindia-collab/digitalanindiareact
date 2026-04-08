import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import seo from "../assets/img/seo1.png"
import social from "../assets/img/social-media.png"
import website from "../assets/img/website.png"
import brand from "../assets/img/brand-marketing1.png"

export default function Project() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="new-middle-content mob-pad-less">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="ts-cebtt text-center">
                <span>We Design, We Market, You Grow.</span>
                <h2>PROFESSIONAL IT & DIGITAL MARKETING SERVICES</h2>
              </div>
            </div>
          </div>

          <div className="service-grid">

            {/* SEO */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src={seo}
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="SEO"
                />
                <h3>
                  <Link to="/services/seo-company-delhi">
                    Search Engine Optimization (SEO)
                  </Link>
                </h3>
                <p>
We assist in enhancing your website's visibility on Google. Our experts identify the most effective keywords that users search for and refine your site to attract more visitors to discover your business online.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src={social}
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="Social Media"
                />
                <h3>
                  <Link to="/services/social-media-marketing-company-delhi">
                    Google Promotion
                  </Link>
                </h3>
                <p>
We design and orchestrate social media initiatives to enhance your brand and engage with clients on platforms such as Facebook, Instagram, and LinkedIn.
                </p>
              </div>
            </div>

            {/* ORM */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src="https://www.edtech.in/public/uploads/web/orm-icon.jpg"
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="ORM"
                />
                <h3>
                  <Link to="/services/orm-company-delhi">
                    CRM Software
                  </Link>
                </h3>
                <p>
                  We assist in overseeing your brand's online reputation by advocating positive content and addressing negative reviews with professionalism.
                </p>
              </div>
            </div>

            {/* Paid Marketing */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src="https://www.edtech.in/public/uploads/web/paid-icon.jpg"
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="Paid Marketing"
                />
                <h3>
                  <Link to="/services/paid-advertising">
                    Social Media Marketing
                  </Link>
                </h3>
                <p>
We execute top-notch advertising campaigns on Google, Facebook, Instagram, LinkedIn, and YouTube to attract prospects and boost revenue.
                </p>
              </div>
            </div>

            {/* Brand Marketing */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src={brand}
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="Brand Marketing"
                />
                <h3>
                  <Link to="/">Logo & Branding</Link>
                </h3>
                <p>
              We assist in establishing a robust brand persona and elevate your enterprise through digital tactics, imaginative content, and promotional initiatives.
                </p>
              </div>
            </div>

            {/* Web Design */}
            <div className="service-card">
              <div className="alb-content">
                <img
                  src={website}
                  className="img-fluid"
                  loading="lazy"
                  width="111"
                  height="103"
                  alt="Web Design"
                />
                <h3>
                  <Link to={website}>
                    Web Development
                  </Link>
                </h3>
                <p>
Our group creates cutting-edge, adaptable web pages that appear stunning and function effortlessly across all gadgets.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}