import React from "react";
import { EstimateInquiry } from "../estimateInquiry/EstimateInquiry";
import { EstimateInquiryForm } from "../estimateInquiry/EstimateInquiryForm";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="general-content">
        <h3>CONTACT US</h3>
        <h5>If you have any questions, please feel free to reach out to us:</h5>
        <ul>
          <li>Email: <a href="mailto:info@alfredosironwork.com">info@alfredosironwork.com</a></li>
          <li>Phone: (818) 300-4802</li>
        </ul>
        <h2>To set up your complimentary estimate within the greater Los Angeles area, please submit the following form:</h2>
      </div>
      <EstimateInquiryForm />
    </div>
  );
}

export default ContactUs;

