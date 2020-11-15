import React from "react";
import MyFooter from "./MyFooter";

import Navbar from "./MyNavBar";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <img className="col-6" src="./images/m3.jpg" alt="" />
          <img className="col-6" src="./images/danas.jpg" alt="" />
          <div>
            <h4>
              perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo el molestiae consequatur, vel illum,
              qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero
              eos et accusamus et iusto odio dignissimos ducimus, qui blaitate
              non provident, similique sunt ga. Et harum quidem rerum facilis
              Nam libero tempore, cum soluta nobis est eligendi optio, cumque
              nihil impedit, quo minus id, quod maxime placeat, facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              aute
            </h4>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default AboutMe;
