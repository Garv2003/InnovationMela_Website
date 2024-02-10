import "./About.css";

const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="about_header">
        <h1>About Us</h1>
        <p className="about_p">
          Maharaja Agrasen Institute of Technology (MAIT) is a renowned
          Engineering and Management institution in Delhi NCR that comprises
          CSE, IT, CST, ITE, AI-DS, AI-ML, ECE, EEE, MAE, ME, MBA. MAIT offers
          various programs enabling its students to become skilled professionals
          in their opted fields.
        </p>
        <p className="about_p">
          Established in 1999 by Maharaja Agrasen Technical Education Society,
          the institute is approved by AICTE, NBA Accredited and affiliated to
          Guru Gobind Singh Indraprastha University.
        </p>
        <p className="about_p">
          MAIT has grown exponentially to emerge as one of the top technical
          institutes among the private Institutes and has been consistently
          ranked amongst the top engineering Institutes by Dataquest. MAIT
          focuses on nurturing the young minds in a learning environment of high
          academic value and imbibe spiritual and ethical values with
          technological and management competence.
        </p>
      </div>
      <div className="about_header">
        <h1>Vision</h1>
        <p className="about_p">
          To nurture young minds in a learning environment of high academic
          value and imbibe spiritual and ethical values with technological and
          management competence.
        </p>
      </div>
      <div className="about_footer">
        <div className="about_sub_footer">
          <h2>Mission</h2>
          <p>
            The Institute shall endeavor to incorporate the following basic
            missions in the teaching methodology:
          </p>
          <ul>
            <li> Engineering Hardware – Software Symbiosis</li>
            <li>Life – Long Learning</li>
            <li>Liberalization and Globalization</li>
            <li>Diversification</li>
            <li>Digitization of Learning Processes</li>
            <li>Entrepreneurship</li>
          </ul>
        </div>
        <div className="about_sub_footer">
          <h2>Values</h2>
          <p>
            The social value of the Institute (Maharaja Agrasen Institute of
            Technology) is the continuing commitment to behave ethically and
            contribute to social development while imparting quality education
            to the students.
          </p>
          <ul>
            <li>Academic integrity and accountability.</li>
            <li>Respect and tolerance for the views of every individual.</li>
            <li>
              Attention to issues of national relevance as well as of global
              concern.
            </li>
            <li>
              Breadth of understanding, including knowledge of the human
              sciences.
            </li>
            <li>Appreciation of intellectual excellence and creativity.</li>
            <li>
              An unfettered spirit of exploration, rationality and enterprise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
