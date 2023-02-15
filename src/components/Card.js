import React from "react";
import Star from "../icon/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="App-card">
      <img src={`./img/${props.img}`} alt="Person" className="" />
      {badgeText && 
        <div className="card-status">
          <p>{badgeText}</p>
        </div>
      }
      <div className="card-description">
        <div className="card-rating">
          <img src={Star} alt="star_icon" className="card-rating-star-icon" />
          <p className="card-rating-star">{props.rating}</p>
          <p className="card-rating-total">({props.reviewCount})</p>
          <p className="card-rating-country">.{props.location}</p>
        </div>
        <p className="card-description">{props.title}</p>
        <p className="card-price">
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
