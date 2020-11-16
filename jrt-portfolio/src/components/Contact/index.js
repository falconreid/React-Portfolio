import React from "react";
import "./styles.css";
import MyForm from "./myform.js";
import Tromso from "./Tromso-fjord.jpg";


function Contact() {
  return (
    <div id="main" style={{ backgroundImage:`url(${Tromso})` }} >
       
    <div className="container">
        <div className="row">
    <div className="col-12">
        <h1>Contact Me</h1>
        <hr/>
    </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-items-center">
    
            <img className="bioImage" src="images/Tromso Pier.jpg" title="Tromso Pier photo by Joel Terrell" alt="Tromso Pier photo by Joel Terrell" />
        </div>
        <div id="contactForm" className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 align-items-center">
<h3>
    Send me an email to connect:
</h3>
<div>
  <p>joel@FalconReidDesign.com</p>
  <p>720.937.7832</p>
  <p><a href="https://www.linkedin.com/in/joelterrell/" title="Find me on Github">Find me on LinkedIn.</a></p>
  <p><a href="https://github.com/falconreid" title="Find me on Github">Find me on Github.</a></p>
  <p>See my <a href="https://docs.google.com/document/d/1z33ZQWOCmL-ka5iJAQfP5nOrPLXkY1WPDmj8g1UMwNk/edit?usp=sharing" target="_blank" title="Joel Terrell's Resume">Resume</a></p>
  <br/>
  <MyForm />
</div>
</div>


</div>
</div>
</div>
    );

}
export default Contact;
