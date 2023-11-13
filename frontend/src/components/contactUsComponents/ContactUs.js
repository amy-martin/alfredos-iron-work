import React from "react";
import { EstimateInquiry } from "../estimateInquiry/EstimateInquiry";
import { EstimateInquiryForm } from "../estimateInquiry/EstimateInquiryForm";

function ContactUs() {

  const estimateFormDescription = (
      <div className="estimate-description">
          <h2 className="estimate-description-title">Estimate Inquiries:</h2>
          <h4>To set up your complimentary estimate within the greater Los Angeles area, please submit the following form:</h4>
      </div>
  )


  return (
    <div className="contact-us">
      <h2 className="title">CONTACT US</h2>
      <div className="general-content">
        <h2>General Inquiries:</h2>
        <h4>If you have any questions, please feel free to reach out to us:</h4>
        <ul>
          <li>Email: <a href="mailto:info@alfredosironwork.com">info@alfredosironwork.com</a></li>
          <li>Phone: (818) 300-4802</li>
        </ul>
      </div> 
      <EstimateInquiry estimateFormDescription={estimateFormDescription}/>
    </div>
  );
}

export default ContactUs;

