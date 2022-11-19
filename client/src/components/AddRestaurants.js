import React, { useState, useContext } from "react";
import RestaurantsApi from "../apis/RestaurantApi";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurants = () => {
  const [, , addResToUi] = useContext(RestaurantsContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setpriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantsApi.post("/", {
        name: `{${name}}`,
        location: `{${location}}`,
        price_range: priceRange,
      });

      // updated Ui with new restaurants 
      addResToUi(response.data.data.restaurants);
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form action="">
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="custom-select p-1 my-1 w-100 mr-sm-2"
              value={priceRange}
              onChange={(e) => setpriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary col-1"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
