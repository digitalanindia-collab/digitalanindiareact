import Footer from "../component/Footer";
import Banner1 from "../component/Banner1";
import FaqsAbout from "../component/FaqsAbout";
import about1 from "../assets/img/digitalanindia_about_us.jpg"
import about2 from "../assets/img/digitalindia_about_us_1.jpg"

export default function About() {
  return (
    <>
      <Banner1 />

      <section style={{padding:"40px 0", background:"#f8f9fa"}}>
        <div className="container">

          {/* Intro */}
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 style={{fontWeight:"700", marginBottom:"20px"}}>
                About Digitalaninidia Technologies
              </h2>
              <p>
                Welcome to Digitalaninidia Technologies, a growing web development
                and digital marketing company dedicated to helping businesses build
                a strong presence online. We deliver practical digital solutions
                that support business growth, brand visibility, and long-term
                success in the online marketplace.
              </p>
            </div>
          </div>

          {/* Our Journey */}
          <div className="row mt-5">
            <div className="col-md-6">
              <img
                src={about1}
                alt="company"
                style={{width:"100%", borderRadius:"10px", height: "600px",objectFit:"contain"}}
              />
            </div>

            <div className="col-md-6">
              <h3>Our Journey</h3>
              <p>
                Digitalaninidia Technologies was founded with the aim of
                simplifying digital services for businesses of all sizes.
                What started as a small initiative has gradually grown into
                a trusted digital service provider.
              </p>

              <p>
                Through dedication, creativity, and consistent results,
                we continue to help businesses move forward in the
                digital space.
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
   <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd" , color:"white"}}>
                <h4>Transparency</h4>
                <p style={{color:"white"}}>Clear communication and honest work with every client.</p>
              </div>
                </div>
                 <div className="col-md-6 mb-4">
                   <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd" , color:"white"}}>
                <h4>Quality</h4>
                <p style={{color:"white"}}>Every project receives professional attention and detail.</p>
              </div>
                </div>
                 <div className="col-md-6 mb-4">
                  <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Commitment</h4>
                <p style={{color:"white"}}>Dedicated to delivering the best possible results.</p>
              </div>
                </div>
                 <div className="col-md-6 mb-4">
                     <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Relationships</h4>
                <p style={{color:"white"}}>We focus on long-term partnerships with clients.</p>
              </div>
             
                </div>
                 <div className="col-md-6 mb-4">
                  <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Relationships</h4>
                <p style={{color:"white"}}>We focus on long-term partnerships with clients.</p>
              </div>
              </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="row mt-5 text-center">
            <div className="col-md-6">
   <img
                src={about2}
                alt="company"
                style={{width:"100%", borderRadius:"10px", height: "400px",objectFit:"contain"}}
              />
            </div>
               <div className="col-md-6">
                          <h3>Who We Are</h3>
<p>Who We Are
We are a team of creative thinkers, developers, and marketing professionals who are passionate about digital innovation. Our team combines technical knowledge with strategic planning to build websites and marketing campaigns that actually work. At Digitalaninidia Technologies, we focus on understanding our clients’ needs and delivering solutions that match their business goals.</p>
            </div>
          </div>
              <div className="row mt-5">
            <div className="col-md-12 text-center">
              <div >
                <h4>What We Do</h4>
                <p >We focus on long-term partnerships with clients.</p>
              </div>
         <div className="row">
          <div className="col-md-6 mb-4">
  <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Website Design & Development</h4>
                <p style={{color:"white"}}>We create modern, responsive, and user-friendly websites that represent your brand professionally and provide a smooth experience for visitors.</p>
              </div>
          </div>
          <div className="col-md-6 mb-4">
             <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Digital Marketing</h4>
                <p style={{color:"white"}}>Our marketing strategies focus on improving online visibility, attracting the right audience, and increasing business inquiries.</p>
              </div>
          </div>
        
          <div className="col-md-6 mb-4">
             <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>E-commerce Solutions</h4>
                <p style={{color:"white"}}>We help businesses build online stores that are secure, easy to manage, and designed to convert visitors into customers.</p>
              </div>
          </div>
          <div className="col-md-6 mb-4">
             <div style={{background:"#1E3A8A", padding:"25px", borderRadius:"10px", boxShadow:"0 0 10px #ddd", color:"white"}}>
                <h4>Paid Advertising</h4>
                <p style={{color:"white"}}>Our team manages targeted advertising campaigns to help businesses reach potential customers quickly and effectively.</p>
              </div>
          </div>
         </div>
            </div>
          </div>
          <div className="container my-5">

  <div className="row g-2">

    <div className="col-md-6">
      <div className="card h-100 shadow-sm border-0 p-4 text-center">
        <i className="fa fa-lightbulb fa-2x text-primary mb-3"></i>
        <h4>Our Working Approach</h4>
        <p>
          Every business is different, so we do not follow a fixed formula. Our
          process begins with understanding your business, audience, and goals.
          Once we have clarity, we develop a customized plan aligned with your
          objectives and latest digital trends.
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card h-100 shadow-sm border-0 p-4 text-center">
        <i className="fa fa-users fa-2x text-success mb-3"></i>
        <h4>Our Team</h4>
        <p>
          Our team includes skilled developers, designers, SEO specialists,
          and digital marketing professionals working together to deliver
          reliable results while continuously improving their skills.
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card h-100 shadow-sm border-0 p-4 text-center">
        <i className="fa fa-star fa-2x text-warning mb-3"></i>
        <h4>Why Choose Digitalindia Technologies</h4>
        <p>
          Businesses choose us because we focus on practical results rather
          than complicated promises. We combine creativity with technical
          expertise to deliver meaningful digital solutions.
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card h-100 shadow-sm border-0 p-4 text-center">
        <i className="fa fa-handshake fa-2x text-danger mb-3"></i>
        <h4>Our Commitment</h4>
        <p>
          We are committed to delivering work that meets high standards of
          quality and reliability. Trust and long-term client success are
          always our priority.
        </p>
      </div>
    </div>

    <div className="col-md-12">
      <div className="card shadow border-0 p-5 text-center bg-light">
        <h3 className="mb-3">Let’s Work Together</h3>
        <p>
          If you are looking for a dependable team to support your digital
          growth, Digitalindia Technologies is here to help. Whether you need a
          website, marketing support, or a complete digital strategy, we are
          ready to assist you.
        </p>
<span>
     <button className="btn btn-sm m-2" style={{background: "#1e3a8a", color:"white"}}>
          Contact Us
        </button>
</span>
   
      </div>
    </div>

  </div>

</div>
            {/* <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h3>Our Working Approach</h3>
              <p>
Every business is different, so we do not follow a fixed formula. Our process begins with understanding your business, audience, and goals. Once we have clarity, we develop a customized plan that aligns with your objectives. Our team stays updated with the latest digital trends to ensure our strategies remain effective and relevant.
              </p>
            </div>
          </div>
    <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h3>Our Team</h3>
              <p>
The strength of Digitalaninidia Technologies lies in its people. Our team includes skilled developers, designers, SEO specialists, and digital marketing professionals who work together to deliver reliable results. Continuous learning is an important part of our culture, which allows us to improve our services and stay ahead in the fast-changing digital industry
              </p>
            </div>
          </div>
          
              <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h3>Why choose Digitalindia Technologies</h3>
              <p>
          Businesses choose us because we focus on practical results rather than complicated promises. We combine creativity with technical expertise to deliver digital solutions that make a real difference. Our approach is simple: understand the client, build the right strategy, and execute it with precision.
              </p>
            </div>
          </div>
           <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h3>Our Commitment</h3>
              <p>
            At Digitalaninidia Technologies, we are committed to delivering work that meets high standards of quality and reliability. We value trust and always aim to provide services that support our clients’ long-term success.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <h3>Let’s Work Together</h3>
              <p>
             Let’s Work Together

If you are looking for a dependable team to support your digital growth, Digitalaninidia Technologies is here to help. Whether you need a website, marketing support, or a complete digital strategy, we are ready to assist you.
              </p>
            </div>
          </div> */}
        </div>
      </section>
<FaqsAbout />
      <Footer />
    </>
  );
}