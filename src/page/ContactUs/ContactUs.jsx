import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact_us">
      <h1>Contact Us</h1>
      <ul className="contact_list">
        <li>
          <strong>FACULTY HEAD</strong>
          <div className="contact_SubList">
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
          </div>
        </li>
        <li>
          <strong>SPONSORSHIP TEAM</strong>
          <div>
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
          </div>
        </li>
        <li>
          <strong>FOR ANY QUERY</strong>
          <div>
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
            <div className="contact_details">
              <p>Dr. Anil Kumar</p>
              <p>+91-1234567890</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
