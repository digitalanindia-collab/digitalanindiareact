import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PricingPlans() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="new-data-s">
      <div className="container-fluid p-nj-0">
        <div className="row">

          <div className="col-md-5 df-fbhhf">
            <div className="bnhmnuxcjs">
              <h3>
                Experience the Future of <br />
                Business with Our Latest <br />
                IT Services
              </h3>

              <p>Let’s discuss your project</p>

              <button className="new-bhye-fb">
                <a href="/services">
                  View More
                </a>
              </button>

            </div>
          </div>

          <div className="col-md-7" style={{ background:"#e07f75"}}>
            <div className="abgg-dnhhdfg-ern">

              <div className="truchms-carousel">

                <div className="item new-fnhhfbg-snh">
                  <div className="top-head-gbhs">

                    <a href="https://www.edtech.in/services/data-science">

                      <div className="njhbsghbs-eh">
                        <img
                          src="https://www.edtech.in/public/assets/front/images/data-science.png"
                          alt="Data Science"
                        />
                      </div>

                      <h3>Data Science</h3>

                      <p>
                       In the contemporary landscape, Data Science and Artificial Intelligence play a crucial role in leveraging extensive datasets and facilitating enlightened decision-making.
                      </p>

                    </a>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}