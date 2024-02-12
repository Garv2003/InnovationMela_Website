import "./EventInfo.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EventInfo = () => {
  const { id } = useParams();

  const eventDetails = [
    {
      name: "Blind Coding",
      date: "Date: 5th April 2023",
      duration: "Expected Event Duration: 4-5 hours",
      fees: "Registration Fees: Rs 50",
      requirement: "Requirement: Coding Platform",
      img: "https://tnm.mait.ac.in/images/2023/03/22/blind-coding.jpg",
      prizes: "Prizes: Exciting Prizes",
      link: "",
      rules: [
        "This event will comprise of 2 round",
        "Individual participation only",
      ],
      rounds: [
        {
          name: "1st Round",
          rules: [
            "During 1st Round 3 Problem Statements would be given out of which any 2 have to be attempted.",
            "The code is to be written without using any IDE on Notepad on desktop",
            "The code written by the contestants would be executed by the core team of the event and any error after execution of code shall not be conveyed to the participant except for the type of error(like TLE or Syntax Error).",
          ],
        },
        {
          name: "2nd Round",
          rules: [
            "During 2nd Round 3 Problem Statements would be given out of which any 2 have to be attempted.",
            "The code is to be written without using any IDE on Notepad on desktop",
            "The code written by the contestants would be executed by the core team of the event and any error after execution of code shall not be conveyed to the participant except for the type of error(like TLE or Syntax Error).",
          ],
        },
      ],
      ruleslink: "https://forms.gle/8Z3Z6Z8Z3Z6Z8Z3Z6",
    },
  ];

  return (
    <div className="event_info">
      <h1>{eventDetails[id - 1].name}</h1>
      <div>
        <img src={eventDetails[id - 1].img} alt="" />
      </div>
      <ul>
        <li>{eventDetails[id - 1].date}</li>
        <li>{eventDetails[id - 1].duration}</li>
        <li>{eventDetails[id - 1].fees}</li>
        <li>{eventDetails[id - 1].requirement}</li>
        <li>{eventDetails[id - 1].prizes}</li>
      </ul>
      <Link
        to={eventDetails[id - 1].link}
        target="_blank"
        className="neon-button"
      >
        Register Now
      </Link>
      <div className="event_rules">
        <h4>Event Rules</h4>
        <ul>
          {eventDetails[id - 1].rules.map((rule, index) => {
            return <li key={index}>{rule}</li>;
          })}
        </ul>
      </div>

      <div className="rounds">
        {eventDetails[id - 1].rounds.map((round, index) => {
          return (
            <div key={index}>
              <h2>{round.name}</h2>
              <ul>
                {round.rules.map((rule, index) => {
                  return <li key={index}>{rule}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Link
        to={eventDetails[id - 1].ruleslink}
        target="_blank"
        className="neon-button"
      >
        Rules and Regulations
      </Link>
    </div>
  );
};

export default EventInfo;
