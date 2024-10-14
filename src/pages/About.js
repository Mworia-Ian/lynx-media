import React from "react";

import WomanImg from "../img/about/woman.png";
import Crew from "../img/about/crew.jpg";
import dance from "../img/about/dance.jpg";


import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden mt-11">
            <img src={dance} alt="" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start mt-80">
            <h1 className="h1">About Us</h1>
            <p className="mb-10 max-w-sm">
              Mambo Stranger😃.…we are a bunch of adults who play
              with cameras, lenses, and light to create beauty! Sometimes we ask
              respected,responsible adults to show us their teeth to prove that
              they are happy but instead, they cry. Tears of joy. Tears of
              Sadness. We dont mind tears or smiles. Our superpower is to
              freeze them in time. And turn strangers into friends.
              <br />
              <br />
              Sometimes the corporate world calls us to order, then we become a
              photography and cinematography company specializing in
              advertisements, short films, and documentaries. Lynx Productions
              Boutique is based in Africa and aims to provide top-notch quality
              services to clients. The company has a talented and experienced
              team of photographers and videographers who are passionate about
              capturing life's most precious moments. We have operations in
              Kenya and Tanzania with dreams of venturing further.
            </p>
            <Link to={"/portfolio"} className="btn ">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
