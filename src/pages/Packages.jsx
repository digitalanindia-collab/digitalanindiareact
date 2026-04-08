import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import Faqs from "../component/Faqs";

export default function Packages() {
  return (
    <>
      <Banner1 />

      <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
        <div className="container">

          <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}>
            Our Packages
          </h2>

          <p style={{ textAlign: "center", marginBottom: "50px" }}>
            Select the ideal online marketing plan to enhance your business development.
          </p>

          <div className="package-grid">

            {/* Basic Package */}
            <div className="package-card mb-3">
           
                <div class="package-badge">Popular</div>
                <div class="package-header">
                        <h3>STARTER</h3>
                        <p style={{color:"white"}}>"Start Smart. Market Smarter."</p>
                    </div>
                    <div class="package-price">
                        <span class="price">₹40,000 <small>/year</small></span>
                        <span class="old-price">₹45,000</span>
                    </div>

                {/* <h3>Starter</h3>
                <h4 style={{ color: "#1E3A8A", margin: "20px 0" }}>₹40,000</h4> */}
<ul class="package-features">
              <li style={{display:"flex", gap:"10px"}}><span style={{color: "#990000"}}>✔</span><span> Delhi</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span  style={{color: "#990000"}}>✔</span><span> Designing 4-6 Working days</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 24/7 Support</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 10 Dynamic Webpages</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 30-40 product images</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> On Page SEO with 2+ Keywords</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Fully Responsive Website</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Enquiry From With all Product</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Google Map On Contact Page</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Live Chat</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Admin Control Panel</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Keywords Density Analytics</span></li>
                   <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</ span>< span > Setup Google Analytics </ span ></ li >
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Setup Google Webmaster Free Search Engine</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Local Google Business Listing</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Facebook Page Creation</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Customer Support</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Phone Support (10Am-6Pm)</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Chat Support(10Am-6Pm)</span></li>
                </ul>

                <button className="btn mt-3" style={{ background:"#1E3A8A", color:"white"}}>
                  Choose Plan
                </button>

              </div>
        

            {/* Standard Package */}
            <div className="package-card mb-3">
             <div class="package-badge">Best Value</div>
                <div class="package-header">
                        <h3>Standard</h3>
                        <p style={{color:"white"}}>"Start Smart. Market Smarter."</p>
                    </div>
                    <div class="package-price">
                        <span class="price">₹60,000 <small>/year</small></span>
                        <span class="old-price">₹72,000</span>
                    </div>

                {/* <h3>Standard</h3>
                <h4 style={{ color: "#1E3A8A", margin: "20px 0" }}>₹60,000</h4> */}

           <ul class="package-features">
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Delhi NCR</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Designing 8-12 Working days</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>24/7 Support</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Dynamic Webpages</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>50-85 Product Images</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>On Page SEO with 5+ Keywords</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Fully Responsive Website</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Enquiry Form With All Product</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Google Map On Contact Page</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Live Chat</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Admin Control Panel</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Keywords Density Analytics</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Setup Google Analytics</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Setup Google Webmaster Free Search Engine</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Local Google Business Listing</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Facebook, X, LinkedIn Page Creation</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Customer Support</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Phone Support (10AM-6PM)</span></li>
  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span>Chat Support (10AM-6PM)</span></li>
</ul>

                <button className="btn  mt-3" style={{ background:"#1E3A8A" , color:"white"}}>
                  Choose Plan
                </button>

            
            </div>

            {/* Premium Package */}
            <div className="package-card mb-3">
              {/* <div class="package-badge">Popular</div> */}
                <div class="package-header">
                        <h3>Enhanced</h3>
                        <p style={{color:"white"}}>"Start Smart. Market Smarter."</p>
                    </div>
                    <div class="package-price">
                        <span class="price">₹80,000 <small>/year</small></span>
                        <span class="old-price">₹100,000</span>
                    </div>

                {/* <h3>Enhanced</h3>
                <h4 style={{ color: "#1E3A8A", margin: "20px 0" }}>₹80,000</h4> */}

                <ul class="package-features">
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 2 States</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Designing 15-20 Working days</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 24/7 Support</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 10 Dynamic Webpages</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> 100-150 product images</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> On Page SEO with 10+ Keywords</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Fully Responsive Website</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Enquiry From With all Product</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Google Map On Contact Page</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Live Chat</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Admin Control Panel</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Keywords Density Analytics</span></li>
                   <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Setup Google Analytics</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Setup Google Webmaster Free Search Engine</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Local Google Business Listing</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Facebook, X, LinkedIn Page Creation</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Customer Support</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Phone Support (10Am-6Pm)</span></li>
                  <li style={{display:"flex", gap:"10px",borderBottom:"1px solid #eee"}}><span style={{color: "#990000"}}>✔</span><span> Chat Support(10Am-6Pm)</span></li>
                  

                </ul>

                <button className="btn  mt-3" style={{ background:"#1E3A8A" , color:"white"}}>
                  Choose Plan
                </button>

            </div>

    

        </div>
        </div>
      </section>
<Faqs />
      <Footer />
    </>
  );
}