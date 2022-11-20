import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantApi from "../apis/RestaurantApi";

const Restaurants_details = () => {
  // useParam is used for to store the all the parameters present in url
  const { id } = useParams();
  const [selectedRestautant, setSelectedRestautant] =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get(`/${id}`);
        setSelectedRestautant(response.data.data.restaurants);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div>{selectedRestautant && selectedRestautant.name}</div>;
};

export default Restaurants_details;
