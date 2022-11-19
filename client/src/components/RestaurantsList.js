import React from "react";

const RestaurantsList = () => {
  return (
    <div className="list-group">
      <table className=" table table-hover table-dark mt-5">
        <thead className="">
          <tr className="bg-primary" >
            <th scope="col">Restaurant</th>
            <th scope="col">Locatio</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ApanaDhaba</td>
            <td>Pune</td>
            <td>$$$$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>ApanaDhaba</td>
            <td>Pune</td>
            <td>$$$$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>ApanaDhaba</td>
            <td>Pune</td>
            <td>$$$$$</td>
            <td>rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
