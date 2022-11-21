import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RestaurantApi from "../apis/RestaurantApi";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handelSubmitReview = async (e) => {
    //e.preventDefault();
    try {
      const response = await RestaurantApi.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
      //navigate(`/`);
      //navigate(location.pathname);
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
              id="name"
              className="form-control"
            />
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              className="custom-select p-1 w-100"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group p-1 my-1 w-100 mr-sm-2 row">
          <label htmlFor="Review">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            name="Review"
            id=""
            cols="30"
          ></textarea>
        </div>
        <button
          onClick={handelSubmitReview}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
