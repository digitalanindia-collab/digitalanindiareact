import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";
import blog1 from "../assets/img/blog1.jpeg"
import blog2 from "../assets/img/blog2.png"
import blog3 from "../assets/img/blog3.jpg"

export default function Blogs() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          <h2 style={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}>
            Our Latest Blogs
          </h2>

          <div className="row">

            {/* Blog 1 */}
            <div className="col-md-4">
              <div style={{
                background:"#fff",
                borderRadius:"10px",
                boxShadow:"0 0 10px #ddd",
                overflow:"hidden",
                marginBottom:"30px"
              }}>
                <img
                  src={ blog1}
                  alt="blog"
                  style={{ width:"100%",height:"224px" }}
                />

                <div style={{ padding:"20px" }}>
                  <h5>The significance of online marketing in 2026</h5>
                  <p>
                    Online promotion assists companies in expanding their presence through search engine optimization, social media outreach, and sponsored advertisements.

                  </p>

                  <button className="btn" style={{background:"#1E3A8A", color:"white"}}>Read More</button>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-md-4">
              <div style={{
                background:"#fff",
                borderRadius:"10px",
                boxShadow:"0 0 10px #ddd",
                overflow:"hidden",
                marginBottom:"30px"
              }}>
                <img
                  src={ blog2}
                  alt="blog"
                  style={{ width:"100%" }}
                />

                <div style={{ padding:"20px" }}>
                  <h5>Essential 10 SEO Strategies to Elevate Your Website</h5>
                  <p>
                   Discover the most effective SEO methods, including keyword analysis,
link building, and content refinement.
                  </p>

                 <button className="btn" style={{background:"#1E3A8A",color:"white"}}>Read More</button>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-md-4">
              <div style={{
                background:"#fff",
                borderRadius:"10px",
                boxShadow:"0 0 10px #ddd",
                overflow:"hidden",
                marginBottom:"30px"
              }}>
                <img
                  src={ blog3}
                  alt="blog"
                  style={{ width:"100%" }}
                />

                <div style={{ padding:"20px" }}>
                  <h5>Why you Needs a Website</h5>
                  <p>
A web presence is essential for companies to establish trust, draw in clients, and expand their online identity.
                  </p>

                   <button className="btn" style={{background:"#1E3A8A", color:"white"}}>Read More</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
<Faqs />
      <Footer />
    </>
  );
}