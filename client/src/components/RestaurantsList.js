import React, { useContext, useEffect } from "react";
import RestaurantApi from "../apis/RestaurantApi";

const RestaurantsList = () => {


  useEffect(() => {
    // so we need to create saprat function to fetch data
    // because useeffect gives error if we return promiss
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="list-group">
      <table className=" table table-hover table-dark mt-5">
        <thead>
          <tr>
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
