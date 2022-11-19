import React from "react";
import Home from "./routes/Home";
import RestaurantsDetails from "./routes/RestaurantsDetails";
import UpdateRestaurants from "./routes/UpdateRestaurants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/restaurants/:id"
              element={<RestaurantsDetails />}
            />
            <Route
              exact
              path="/restautants/:id/update"
              element={<UpdateRestaurants />}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
