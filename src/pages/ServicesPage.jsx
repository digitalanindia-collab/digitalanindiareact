import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";

export default function Services() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "15px" }}>
            Our Services
          </h2>

          <p style={{ textAlign: "center", marginBottom: "50px" }}>
           We offer comprehensive online services to support your business's growth in the digital realm.
          </p>

          <div className="row">

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-code" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>Website Development</h4>
                <p>Professional responsive websites for all kind of businesses.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-search" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>SEO Optimization</h4>
                <p>Improve your ranking and increase organic traffic.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-bullhorn" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>Digital Marketing</h4>
                <p>Grow your brand with our social media marketing and online ads team.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-paint-brush" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>Graphic Design</h4>
                <p>Creative logo, banner, and branding designs for your company.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-pencil" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>Content Writing</h4>
                <p>SEO friendly blog writing and website content creation.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div style={{
                background:"#fff",
                padding:"30px",
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 0 10px #ddd",
                marginBottom:"30px"
              }}>
                <i className="fa fa-line-chart" style={{fontSize:"40px",color:"#1E3A8A"}}></i>
                <h4 style={{marginTop:"15px"}}>Google Ads</h4>
                <p>Run targeted Google Ads campaigns to generate leads.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}