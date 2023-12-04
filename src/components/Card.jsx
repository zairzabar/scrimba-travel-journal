import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

function Card(props) {
  console.log(props.coverImg);
  return (
    <div className="card__container">
      <div className="img__container">
        <img src={`/images/delhi.jpg`} alt={props.city} />
      </div>
      <div className="card__details">
        <div className="location">
          <FaLocationDot className="icon__red" />
          <h3>{props.country}</h3>
          <a href={props.mapLink}>View on Google Maps</a>
          <FaMapLocationDot className="icon__red" />
        </div>
        <h2 className="city">{props.city}</h2>
        <small className="duration">
          {props.duration.from} - {props.duration.to}
        </small>
        <p className="card__desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
