import React, { useContext, useEffect } from "react";
import RestaurantApi from "../apis/RestaurantApi";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";
import Starrating from "./Starrating";
const RestaurantsList = (props) => {
  // importing from contect apis this make asscess to all compl
  const [restaurants, setRestaurants] = useContext(RestaurantsContext);
  /* The react navigation library allows the UI to be in sync with the browser
  URL by conditionally displaying components. Moreover, 
it also allows browser functionalities like the back button and page refresh. */
  const navigate = useNavigate();

  useEffect(() => {
    // so we need to create saprat function to fetch data
    // because useeffect gives error if we return promiss
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get("/");
        console.log(response);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const haldelDelete = async (e, id) => {
    e.stopPropagation();
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

  const handelUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restautants/${id}/update`);
  };

  const handelRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const randerRating = (restaurant) => {
     if(!restaurant.count){
      return   <span className="text-warning ml-1">0 reviews</span>
     }
    return (
      <>
        <Starrating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">{`(${restaurant.count})`}</span>
      </>
    );
  };

  return (
    <div className="list-group">
      <table className=" table table-hover border border-dark mt-5">
        <thead>
          <tr className="bg-primary text-light">
            <th scope="col">Restaurant</th>
            <th scope="col">Locatio</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(restaurants)
            ? restaurants.map((restaurant) => {
                return (
                  <tr
                    onClick={() => handelRestaurantSelect(restaurant.id)}
                    key={restaurant.id}
                  >
                    <td>{restaurant.name}</td>
                    <td>{restaurant.location}</td>
                    {/* we are repeating $ sign with price range value  */}
                    <td>{"$".repeat(restaurant.price_range)}</td>
                    <td>{randerRating(restaurant)}</td>
                    <td>
                      <button
                        onClick={(e) => handelUpdate(e, restaurant.id)}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => haldelDelete(e, restaurant.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
