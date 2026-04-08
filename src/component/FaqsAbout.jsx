import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

export default function Faq() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const faqs = [
    {
      q: "What services does Digitalaninidia Technologies provide?",
      a: "Digitalaninidia Technologies offers a range of digital services including website design and development, digital marketing, search engine optimization (SEO), paid advertising, and e-commerce solutions. Our goal is to help businesses build a strong online presence and attract more customers."
    },
    {
      q: "Do you develop custom websites?",
      a: "Yes, we design and develop fully customized websites based on your business needs. Our websites are responsive, user-friendly, and optimized for performance across all devices including mobiles, tablets, and desktops."
    },
    {
      q: "How long does it take to build a website?",
      a: "The timeline depends on the type and complexity of the website. A basic business website may take around 7–15 days, while larger or more advanced websites such as e-commerce platforms may take a few weeks."
    },
    {
      q: "Do you provide SEO services for websites?",
      a: "Yes, we offer complete SEO services to help improve your website’s ranking on search engines. Our SEO work focuses on increasing website visibility, attracting the right audience, and generating organic traffic."
    },
    {
      q: "Can you help promote my business online?",
      a: "Absolutely. Our digital marketing services include SEO, social media marketing, and paid advertising campaigns that help businesses reach their target audience and grow online."
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes, we work with businesses of all sizes including startups, small businesses, and established companies. Our services are designed to be flexible and suitable for different business needs."
    },
    {
      q: "Do you provide e-commerce website development?",
      a: "Yes, we build secure and easy-to-manage e-commerce websites that allow businesses to sell products online, manage orders, and handle payments efficiently."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, all websites developed by Digitalaninidia Technologies are fully responsive. This means they will work smoothly on smartphones, tablets, and desktop computers."
    },
    {
      q: "Do you provide support after the website is completed?",
      a: "Yes, we provide ongoing support and maintenance to ensure your website continues to perform well and stays updated with the latest technologies."
    },
    {
      q: "How can I contact Digitalaninidia Technologies?",
      a: "You can contact us by phone, email, or by visiting our office in Delhi. Our team will be happy to discuss your project and guide you with the best digital solutions for your business."
    }
  ];

  return (
    <>
 

      <section className="new-middle-freqjjs">
        <div className="container">

          <div className="text-center mb-4">
            <h2>FAQS</h2>
          </div>

          <div className="accordion" id="faqAccordion">

            {faqs.map((item, index) => (
              <div className="accordion-item" key={index} data-aos="fade-up">

                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {item.q}
                  </button>
                </h2>

                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {item.a}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}