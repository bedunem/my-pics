import React from "react";
import Navbar from "./MyNavBar";
import "./ContactStyle.css";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div>
            <img className="col md-6" src="./images/me.png" alt="" />
          </div>
          <div className="col md-6">
            <h5>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec
            </h5>
            <form>
              <div className="form-row">
                <div className="col-6">
                  <input type="text contact" placeholder="first name" />
                </div>
                <div className="col-6">
                  <input type="text" placeholder="last name" />
                </div>
              </div>
              <div className="row mt-20">
                <div className="col-12">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
