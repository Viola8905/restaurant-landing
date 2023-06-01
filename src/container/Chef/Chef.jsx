import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img
        src="https://mediacenter.uzhnu.edu.ua/live/2022/08/t.v.o.-dekana-fmtst-pavlo-mulesa.jpg"
        alt="chef"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          officia, dolorum fuga in nulla dicta corporis repellat reiciendis
          aspernatur, itaque ratione, illo placeat enim tenetur!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Pavlo Pavlovich</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
