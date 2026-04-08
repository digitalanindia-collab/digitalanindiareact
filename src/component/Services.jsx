import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="new-content-shh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="ts-cebtt text-center">
                <span>Building Brands with Design & Marketing Excellence</span>
                <h2>BEST WEB DESIGN & DIGITAL MARKETING COMPANY IN INDIA</h2>
              </div>

              <div className="ts-cebtt-2 text-center">
                <p>
                
In the field of online marketing, website creation, and AI, a mere click can change everything. From assembling & overseeing a site to sustaining and enhancing it, we manage every aspect. With a crew of skilled web artisans, programmers, and advertisers, Edtech has emerged as a byword for premier SEO and website design firm in India.
                </p>
              </div>

              <div className="ts-cebtt-3 text-center">
                <p>
                 With our extensive expertise and insights spanning various fields, you can count on receiving a polished, top-performing website and marketing plan that brings the outcomes you desire for your company. Additionally, we recognize that SEO web design involves not only its operation but also its accessibility to the end user.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}