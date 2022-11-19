import React from "react";
import Home from "./routes/Home";
import RestaurantsDetails from "./routes/RestaurantsDetails";
import UpdateRestaurants from "./routes/UpdateRestaurants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
