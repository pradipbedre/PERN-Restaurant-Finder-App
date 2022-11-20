import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantApi from "../apis/RestaurantApi";
import { useNavigate } from "react-router-dom";

const UpdateRestaurants = () => {
  // this test has all paramets which is present in url like id and all
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantApi.get(`/${id}`);
      console.log(response);
      setName(response.data.data.restaurants.name);
      setLocation(response.data.data.restaurants.location);
      setPriceRange(response.data.data.restaurants.price_range);
    };
    fetchData();
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const updateHotel = await RestaurantApi.put(`/${id}`, {
      name: `{${name}}`,
      location: `{${location}}`,
      price_range: priceRange,
    });
    navigate("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            type="number"
            className="form-control"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurants;
