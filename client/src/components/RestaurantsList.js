import React, { useContext, useEffect } from "react";
import RestaurantApi from "../apis/RestaurantApi";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantsList = (props) => {
  // importing from contect apis this make asscess to all compl
  const [restaurants, setRestaurants] = useContext(RestaurantsContext);

  useEffect(() => {
    // so we need to create saprat function to fetch data
    // because useeffect gives error if we return promiss
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const haldelDelete = async (id) => {
    try {
      const response = await RestaurantApi.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((res) => {
          return res.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

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
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  {/* we are repeating $ sign with price range value  */}
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>review</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button
                      onClick={() => haldelDelete(restaurant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
