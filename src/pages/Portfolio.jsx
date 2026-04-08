import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";
import portfolio1 from "../assets/img/portfolio1.png";
import portfolio2 from "../assets/img/portfolio2.png";
import portfolio3 from "../assets/img/portfolio3.png";
import portfolio4 from "../assets/img/portfolio4.png";
import portfolio5 from "../assets/img/portfolio5.jpg";
import portfolio6 from "../assets/img/portfolio6.jpg";


export default function Portfolio() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}>
            Our Portfolio
          </h2>

          <p style={{ textAlign: "center", marginBottom: "50px" }}>
            Some of our recent projects and successful work for clients.
          </p>

          <div className="row">

            {/* Project 1 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src={ portfolio1}
                  alt="project"
                  style={{ width: "100%" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>E-commerce Website</h5>
                  <p>Website Development</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src= { portfolio2}
                  alt="project"
                  style={{ width: "100%" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>SEO Project</h5>
                  <p>Digital Marketing</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src={ portfolio3}
                  alt="project"
                  style={{ width: "100%" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>Social Media Marketing</h5>
                  <p>Brand Promotion</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project 4 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src={ portfolio4}
                  alt="project"
                  style={{ width: "100%" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>Business Website</h5>
                  <p>Web Design</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project 5 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src={ portfolio5}
                  alt="project"
                  style={{ width: "100%", height:"265px" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>Google Ads Campaign</h5>
                  <p>Online Advertising</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project 6 */}
            <div className="col-md-4">
              <div style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px #ddd",
                marginBottom: "30px"
              }}>

                <img
                  src={ portfolio6}
                  alt="project"
                   style={{ width: "100%", height:"265px" }}
                />

                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h5>MLM Website</h5>
                  <p>MLM Website</p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
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