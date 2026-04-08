import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";

export default function Contact() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">
          
          <h2 style={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}>
            Contact Us
          </h2>

          <div className="row">

            {/* Contact Details */}
            <div className="col-md-6">
              <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px #ddd" }}>
                
                <h4 style={{ marginBottom: "20px" }}>Our Office</h4>

                <p>
                  <strong>Address:</strong><br/>
                  Govindpuri Gali No 2
                </p>
                <p>
                  <strong>Phone:</strong><br/>
<p><a href="tel:+919599443663" style={{color:"black"}}>+91 9599443663</a></p>
<p><a href="tel:+918368955806" style={{color:"black"}}>+91 8368955806</a></p>
                  
                    
                
                </p>

                <p>
                  <strong>Email:</strong><br/>
                  info@digitalanindia.com
                </p>

                <p>
                  <strong>Working Hours:</strong><br/>
                  Mon - Fri : 10:00 AM - 6:00 PM
                </p>

              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px #ddd" }}>
                
                <h4 style={{ marginBottom: "20px" }}>Send Message</h4>

                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>

                  <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>

                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>

                  <div className="form-group mb-3">
                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>

                  <button className="btn btn-primary" style={{ width: "100%",background:"#1E3A8A" }}>
                    Send Message
                  </button>

                </form>

              </div>
            </div>

          </div>

          {/* Map */}
          <div style={{ marginTop: "50px" }}>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=govindpuri&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: "0", borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
<Faqs />
      <Footer />
    </>
  );
}