import { useEffect } from "react"; 
import AOS from "aos";
 import "aos/dist/aos.css"; 

 export default function Faq() { 
    useEffect(() => {
         AOS.init({ duration: 1000 }); }, []); 
         const faqs = [ { q: "What are your unique selling propositions for your digital marketing services?",
             a: "Our focus is on tailored strategies, transparent dialogue regarding results, and measurable achievements that correspond with your organizational goals." },
              { q: "Do you design websites for my business type and brand?", 
                a: "Absolutely, our website design services create personalized sites specifically designed for your sector, target audience, and brand personality." },
                 { q: "Do you also provide data analytics services?", 
                    a: "Absolutely, we provide sophisticated analytics to monitor performance, comprehend customers, and enhance business choices." },
                  { q: "How will data analytics help my business grow?",
                     a: "We transform your information into understanding, enabling you to enhance tactics, grasp user behavior, and boost earnings." }, 
                  { q: "Do you also provide your services in other countries?",
                     a: "Absolutely, we cater to clients around the world and offer complete assistance no matter where you are situated." },
                   { q: "Do you provide paid marketing services for all budgets?", 
                    a: "Absolutely, we design advertising initiatives on Google, Facebook, and various other platforms tailored for maximum return on investment across all budget ranges." },
                    { q: "Do you create Wikipedia pages for businesses?", 
                        a: "Should your brand adhere to Wikipedia standards, we can assist in crafting and launching a polished page." },
                     { q: "How long does it take to see results from SEO?",
                         a: "SEO generally requires a timeframe of 3 to 6 months, influenced by the level of competition and the current state of the website." },
                      { q: "Do you provide website maintenance services?",
                         a: "Absolutely, we deliver enhancements, safeguard surveillance, and upkeep to ensure your website operates seamlessly." }, 
                      { q: "Can you also help me create an e-commerce website?",
                         a: "Indeed, we create adaptable, mobile-optimized e-commerce platforms designed for maximum conversions." },
                       { q: "Will I receive regular reports?",
                         a: "Absolutely, we offer performance analytics and observations to ensure you're consistently updated on your advancement." },
                        { q: "Can I receive all your services in one package?",
                             a: "Absolutely, we provide combined offerings that encompass SEO, design, analytics, and promotion." } ]; 
                        return ( <>  <section className="new-middle-freqjjs"> <div className="container"> <div className="row"> <div className="col-md-12"> <div className="ts-cebtt text-center"> <h2>FAQS</h2> </div> </div> </div> <div className="row pd-njjdjf-ww mmms-ruuud"> {faqs.map((item, index) => ( <div className="col-md-6" key={index} data-aos="fade-up" > <div className="accordion" id="faqAccordion"> <div className="accordion-item"> <h2 className="accordion-header" id={`heading${index}`} > <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} > {item.q} </button> </h2> <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion" > <div className="accordion-body"> {item.a} </div> </div> </div> </div> </div> ))} </div> </div> </section> </> ); }