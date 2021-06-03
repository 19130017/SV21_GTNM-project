import React, { Component } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

class Contact extends Component {
  render() {
    return (
      <div>
        <Breadcrumb position="Contact" />
        <section className="login spad contact-section">
            <div className ="container-contact">
            <div className = "row">
              <div className = "col-lg-6 contact-info">
              <div><i className = "fa fa-map-marker"/>Address, Nong Lam University, HCM city</div>
              <div><i className = "fa fa-envelope"/>hci2021group02.gmail.com</div>
              <div>
                <i className = "fa fa-phone" />0987609675
              </div>
              <div>
                <i className = "fa fa-clock-o"/> Mon -Fri 8:00 AM to 5:00 PM
              </div>
              </div>
              <div className = "col-lg-6 contact-form">
                <h3 className = "h3-contact">Contact Us</h3>
                <form className ="contact" method="post">
                  <input className ="text-box" type="text" name="" value="" placeholder="Your Name" required/>
                  <input className ="text-box" type="text" name="" value="" placeholder="Your Email" required/>
                  <textarea row = "7" type ="text" placeholder = "Your Message" required/>
                  <input className ="btn btn-primary" type="submit" name="" value="Send"/>
                </form>
              </div>
             
            </div>
            
            </div>
        </section>
      </div>
    );
  }
}

export default Contact;
