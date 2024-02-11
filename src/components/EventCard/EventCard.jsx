import "./EventCard.css";
import Proptypes from "prop-types";

const EventCard = ({ props }) => {
  return (
    <div className="box">
      <span></span>
      <div className="content">
        <h2>{props.EventName}</h2>
        <p>{props.EventDesc}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  props: Proptypes.object,
  EventName: Proptypes.string,
  EventDesc: Proptypes.string,
};

export default EventCard;
