import React from "react";

const AddRestaurants = () => {
  return (
    <div className="container">
      <form action="" >
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select className="custom-select p-1 my-1 w-100 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary col-1">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
