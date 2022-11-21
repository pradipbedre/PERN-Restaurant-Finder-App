import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantApi from "../apis/RestaurantApi";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import Starrating from "../components/Starrating";

const Restaurants_details = () => {
  // useParam is used for to store the all the parameters present in url
  const { id } = useParams();
  const [selectedRestautant, setSelectedRestautant] =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get(`/${id}`);
        setSelectedRestautant(response.data.data);
        console.log(response.data.data.restaurants.name[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <h1 className="font-weight-light display-1 text-center m-3 mb-4">
         {/* {selectedRestautant.restaurants.name[0]} */}
        </h1>

        <div className="mt-3">
          <Reviews reviews={selectedRestautant.reviews} />
          
        </div>
        <AddReview />
      </>
    </div>
  );
};

export default Restaurants_details;
