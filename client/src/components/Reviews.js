import React from "react";
import Starrating from "./Starrating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3">
      {reviews &&
        reviews.map((review) => {
          return (
            <div
              className="card text-white bg-primary mb-3 me-4"
              style={{ maxWidth: "30%" }}
              key={review.id} 
            >
              <div className="cad-header d-flex justify-content-between">
                <span>{review.name}</span>
                <span>
                  <Starrating rating={review.rating} />
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          );
        })}

      {/*  < */}
    </div>
  );
};

export default Reviews;
