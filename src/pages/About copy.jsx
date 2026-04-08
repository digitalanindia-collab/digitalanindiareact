import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";

export default function About() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          {/* About Company */}
          <div className="row align-items-center">

            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x350"
                alt="about"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>

            <div className="col-md-6">
              <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
                About Our Company
              </h2>

              <p>
                We are a professional digital marketing and website development
                company dedicated to helping businesses grow online. Our team
                provides high-quality services including website development,
                SEO, social media marketing, and branding.
              </p>

              <p>
                Our goal is to deliver creative and result-oriented solutions
                that help our clients build a strong online presence and reach
                more customers.
              </p>
            </div>

          </div>

          {/* Mission Vision */}
          <div className="row" style={{ marginTop: "60px" }}>

            <div className="col-md-6">
              <div style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 10px #ddd"
              }}>
                <h4>Our Mission</h4>
                <p>
                  Our mission is to provide innovative digital solutions that
                  help businesses succeed in the online world through technology
                  and marketing strategies.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 10px #ddd"
              }}>
                <h4>Our Vision</h4>
                <p>
                  Our vision is to become a trusted digital partner for
                  businesses by delivering creative, reliable, and effective
                  digital services.
                </p>
              </div>
            </div>

          </div>

          {/* Why Choose Us */}
          <div style={{ marginTop: "60px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "40px", fontWeight:"bold" }}>
              Why Choose Us
            </h2>

            <div className="row text-center">

              <div className="col-md-3">
                <h4>100+</h4>
                <p>Projects Completed</p>
              </div>

              <div className="col-md-3">
                <h4>50+</h4>
                <p>Happy Clients</p>
              </div>

              <div className="col-md-3">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>

              <div className="col-md-3">
                <h4>24/7</h4>
                <p>Support</p>
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