import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import adsups from "../assets/img/adsups.webp"
import curify from "../assets/img/curify-dental.webp"
import supergrip from "../assets/img/supergrip.jpg"
import tilemarble from "../assets/img/tile-marble.webp"
import gst from "../assets/img/gst.webp"
import dhs from "../assets/img/dhs.webp"
import acrentwala from "../assets/img/acrentwala.webp"
import polymerse from "../assets/img/polymers.webp"
import shivalik from "../assets/img/shivalik.png"
import teamtuition from "../assets/img/teamtuition.webp"
import namasteyhomes from "../assets/img/namasteyhomes.png"
import useelectro from "../assets/img/uselectro.webp"
import spine from "../assets/img/spine.webp"

export default function ProfessionalTeam() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 const clients = [
  adsups,
  curify,
   polymerse,
     gst,
      useelectro,


  tilemarble,

  dhs,
  acrentwala,
 
  shivalik,
  teamtuition,
  namasteyhomes,
 
  spine,
    supergrip,
];

  const testimonials = [
    {
      text: "We are very grateful to have found you. Digitalanindia helped us rank on Google.",
      name: "Rajeev Verma"
    },
    {
      text: "Great job by Digitalanindia team. Highly skilled and professional.",
      name: "Sanjeev Pathak"
    },
    {
      text: "Digitalanindia helped us create a great online presence through SEO.",
      name: "Divya Pathak"
    },
    {
      text: "Very pleased with the product and support from the team.",
      name: "Arisha Hussain"
    }
  ];

  return (
    <section className="new-middle-logos">

      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <span>Our Customers Is Our Legacy Over 350+ Recognised Brands</span>
            <h2>Rank #1 Digital Marketing & Web Design Agency in India</h2>
          </div>
        </div>

        <div className="row nnns-hhhd-45">

          {/* CLIENT LOGOS */}

          <div className="col-md-7">
            <ul className="row list-unstyled">

              {clients.map((img, index) => (
                <li className="col-md-3 col-6 mb-3" key={index}>
                  <img
                    src={img}
                    className="img-fluid w-100"
                    alt="client"
                    loading="lazy"
                  />
                </li>
              ))}

            </ul>
          </div>


          {/* TESTIMONIALS */}

          <div className="col-md-5">

            {testimonials.map((item, index) => (
              <div
                className="testimonial-box mb-4"
                key={index}
                data-aos="fade-up"
              >
                <p>{item.text}</p>
                <strong>{item.name}</strong>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}