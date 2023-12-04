import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

function Card({
  city,
  country,
  description,
  durationFrom,
  durationTo,
  img,
  mapLink,
}) {
  console.log(img);
  return (
    <div className="card__container">
      <div className="img__container">
        <img src={`images/${img}`} alt={city} />
      </div>
      <div className="card__details">
        <div className="location">
          <FaLocationDot className="icon__red" />
          <h3>{country}</h3>
          <a href={mapLink}>View on Google Maps</a>
          <FaMapLocationDot className="icon__red" />
        </div>
        <h2 className="city">{city}</h2>
        <small className="duration">
          {durationFrom} - {durationTo}
        </small>
        <p className="card__desc">{description}</p>
      </div>
    </div>
  );
}

export default Card;

// city: "Ooty";
// country: "India";
// description: "Ooty, short for Ootacamund and officially Udhagamandalam, is a popular hill resort in the state of Tamil Nadu in Southern India. The name Udhagamandalam is derived from the Toda word 'othakal-mund' which means 'house in mountains'.";
// durationFrom: "Novemver 2018";
// durationTo: "December 2018";
// img: "ooty";
// mapLink: "https://maps.app.goo.gl/UBaA8VHrGD7T7nEN7";
