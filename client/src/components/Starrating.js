import React from "react";

const Starrating = ({ rating }) => {
  const star = [];
  // put stars in array
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(
        <i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>
      );
    } else {
      star.push(<i key={i} className="fa-regular fa-star text-warning"></i>);
    }
  }
  return <>{star}</>;
};

export default Starrating;
