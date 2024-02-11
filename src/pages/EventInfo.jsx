import "./EventInfo.css";
import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <div className="event_info">
      <h1>Blind Coding</h1>
      <div>
        <img
          src="https://tnm.mait.ac.in/images/2023/03/22/blind-coding.jpg"
          alt=""
        />
      </div>
      <ul>
        <li>Date: 5th April 2023</li>
        <li>Expected Event Duration: 4-5 hours</li>
        <li>Registration Fees: Rs 50</li>
        <li>Requirement: Coding Platform</li>
        <li>Prizes: Exciting Prizes</li>
      </ul>
      <Link href="#" target="_blank" className="neon-button">
        Register Now
      </Link>
      <div className="event_rules">
        <h4>Event Rules</h4>
        <ul>
          <li>This event will comprise of 2 round</li>
          <li>Individual participation only</li>
        </ul>
      </div>

      <div className="rounds">
        <h2>1st ROUND</h2>
        <ul>
          <li>
            During 1st Round 3 Problem Statements would be given out of which
            any 2 have to be attempted.
          </li>
          <li>
            The code is to be written without using any IDE on Notepad on
            desktop
          </li>
          <li>
            The code written by the contestants would be executed by the core
            team of the event and any error after execution of code shall not be
            conveyed to the participant except for the type of error(like TLE or
            Syntax Error).
          </li>
        </ul>
      </div>
      <a href="#" className="neon-button">
        Rules and Regulations
      </a>
    </div>
  );
};

export default EventInfo;
