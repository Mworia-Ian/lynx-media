import Img1 from "../img/portfolio/1.jpg";
import Img2 from "../img/portfolio/2.jpg";
import Img3 from "../img/portfolio/3.jpg";
import Img4 from "../img/portfolio/4.jpg";
import Img5 from "../img/portfolio/7.jpg";
import Img6 from "../img/portfolio/5.jpg";



import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-10 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores exercitationem, consequuntur ipsam dicta
              aspernatur praesentium non qui commodi molestiae unde sunt sequi
              iusto. Itaque, mollitia. Suscipit temporibus error perspiciatis!
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Book Now
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img1} alt=""/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img2} alt=""/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img3} alt=""/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img4} alt=""/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img5} alt=""/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" src={Img6} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
