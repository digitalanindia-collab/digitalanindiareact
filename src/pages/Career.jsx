import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";

export default function Career() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
            Career Opportunities
          </h2>

          <p style={{ textAlign: "center", marginBottom: "50px" }}>
           Become a part of our organization and shape your future alongside us. We consistently seek skilled and enthusiastic individuals in digital promotion, website creation, and artistic design.
          </p>

          <div className="row">

            {/* Job Openings */}
            <div className="col-md-6">

              <div style={{ background:"#fff", padding:"25px", marginBottom:"20px", borderRadius:"10px", boxShadow:"0 0 10px #ddd"}}>
                <h4>Digital Marketing Executive</h4>
                <p>Experience: 1-2 Years</p>
                <p>Location: Govindpuri</p>
              </div>

              <div style={{ background:"#fff", padding:"25px", marginBottom:"20px", borderRadius:"10px", boxShadow:"0 0 10px #ddd"}}>
                <h4>React Developer</h4>
                <p>Experience: 1-3 Years</p>
                <p>Location: Govindpuri</p>
              </div>

              <div style={{ background:"#fff", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd"}}>
                <h4>Graphic Designer</h4>
                <p>Experience: 1-2 Years</p>
                <p>Location: Govindpuri</p>
              </div>

            </div>

            {/* Apply Form */}
            <div className="col-md-6">

              <div style={{ background:"#fff", padding:"30px", borderRadius:"10px", boxShadow:"0 0 10px #ddd"}}>
                <h4 style={{ marginBottom:"20px"}}>Apply for Job</h4>

                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Your Name"/>
                  </div>

                  <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Your Email"/>
                  </div>

                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Phone Number"/>
                  </div>

                  <div className="form-group mb-3">
                    <select className="form-control">
                      <option>Select Position</option>
                      <option>Digital Marketing Executive</option>
                      <option>React Developer</option>
                      <option>Graphic Designer</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <input type="file" className="form-control"/>
                  </div>

                  <button className="btn" style={{ width:"100%",background:"#1E3A8A",color:"white" }}>
                    Submit Application
                  </button>

                </form>

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