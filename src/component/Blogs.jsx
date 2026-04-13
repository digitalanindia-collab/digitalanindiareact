import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Blogs() {
      useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    return(
        <>
   <section id="seoprocesssecvtion-1" className="mobilehide">
	<div className="container ">
		<div className="row">
			<div className="col-md-12">
				<div className="ts-cebtt text-center">
					<h2>Our Digital Marketing, Web Design &amp; AI Process</h2>
					<p>Every endeavor is unique, which is why we employ varied tactics for online marketing, website creation, and artificial intelligence solutions. No matter your current position or future direction, you can collaborate with us in one or several aspects of our method.</p>
				</div>
			</div>
		</div>
		<div className="seoprocesssecvtioniocn kjjjf-iiit">
			<ul className="row">
								<li className="col-md-3 wow bounceInUp animated animated mob-half" data-wow-delay="100ms">
					<div className="seoproceiocn"><b>Meeting</b></div>
				</li>
												<li className="col-md-3  wow bounceInUp animated animated mob-half" data-wow-delay="300ms">
					<div className="seoproceiocn"><b>Design &amp; Develop</b></div>
				</li>
												<li className="col-md-3  wow bounceInUp animated animated mob-half" data-wow-delay="700ms">
					<div className="seoproceiocn"><b>Testing</b></div>
				</li>
												{/* <li className="col-md-3  wow bounceInUp animated animated mob-half" data-wow-delay="900ms">
					<div className="seoproceiocn"><b>Launch</b></div>
				</li> */}
												<li className="col-md-3  wow bounceInUp animated animated mob-half" data-wow-delay="500ms">
					<div className="seoproceiocn"><b>Digital Marketing</b></div>
				</li>
							</ul>
		</div>
	</div>
</section>

        </>
    )
}