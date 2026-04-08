import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Testimonials() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      img: "https://www.edtech.in/public/uploads/web/icon1.png",
      title: "Strong Technical Skills",
      desc: "They possess a deep knowledge of programming, design applications, and software, allowing them to build seamless, swift, and polished websites."
    },
    {
      img: "https://www.edtech.in/public/uploads/web/icon2.png",
      title: "Creative Thinking",
      desc: "They employ innovative concepts, hues, and designs to create websites that appear unique, stunning, and appealing to diverse audiences."
    },
    {
      img: "https://www.edtech.in/public/uploads/web/icon3.png",
      title: "Good Communication",
      desc: "They attentively hear their clients, grasp their requirements, and provide insightful recommendations to create websites that align seamlessly with the client's aspirations."
    },
    {
      img: "https://www.edtech.in/public/uploads/web/icon4.png",
      title: "Focused User Experience",
      desc: "They design websites that are easy to use, with simple menus and clear buttons, so visitors enjoy browsing without confusion."
    },
    {
      img: "https://www.edtech.in/public/uploads/web/icon5.png",
      title: "Mobile-Friendly Designs",
      desc: "They consistently ensure that websites function effectively on mobile devices and tablets, not solely on desktop computers, allowing a wider audience to access them effortlessly."
    },
    {
      img: "https://www.edtech.in/public/uploads/web/icon6.png",
      title: "Timely Delivery",
      desc: "They complete assignments punctually and treat timelines with utmost importance, enabling companies to unveil websites swiftly without any unwarranted holdups."
    }
  ];

  return (
    <section className="new-middle-iconic-sh">

      <div className="container">

        <div className="row">
          <div className="col-md-12">

            <div className="ts-cebtt text-center">

              <span>
                Top Reasons to Partner with Us for Your Next Project.
              </span>

              <h2>
                WHAT MAKES THE BEST SEO WEB DESIGN COMPANY IN DELHI?
              </h2>

            </div>

          </div>
        </div>

        <div className="row pd-njjdjf-ww">

          {features.map((item, index) => (

            <div
              className="col-md-4 mb-ss"
              key={index}
              data-aos="fade-up"
            >

              <div className="main-ggge asdc-thgttrfd">

                <img
                  src={item.img}
                  alt={item.title}
                  width="82"
                  height="70"
                  className="img-fluid"
                />

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}