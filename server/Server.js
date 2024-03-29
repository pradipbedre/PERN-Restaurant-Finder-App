const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const db = require("./db/index");
const cors = require("cors");
const dotenv = require("dotenv");

// middleware to retrive Json data from body
app.use(express.json());
app.use(cors());
dotenv.config()

//Get all restaurants
/*
Why do we need to use async await because while performing DB o[eration it will take some 
time if we won't use async await then it will wait till operation compleate.
so that's why we need to make js async simple...
*/
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const result = await db.query(
      "select * from restaurants left join (select restaurant_id,COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id=reviews.restaurant_id;"
    );

    //console.log(result);
    res.status(200).json({
      status: "ok",
      results: result.rows.length,
      data: {
        restaurants: result.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Get individual restaurants
app.get("/api/v1/restaurants/:id", async (req, res) => {
  // console.log(req.params.id);
  try {
    // in this result we get recird which we mention id
    // we should not have to pass directly the req.param.id to quesry may be it will create sql injection vulnerabilities
    // `SELECT * FROM restaurants where id={req.params.id}`
    // node-postgres supports parameterized queries,like follow
    // in simple term whatever in $1 we gone replace with next parameter array
    const restaurant = await db.query(
      ` select * from restaurants left join (select restaurant_id,COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id=reviews.restaurant_id where id=$1;`,
      [req.params.id]
    );

    // for reviews
    const reviews = await db.query(
      `SELECT * FROM reviews where restaurant_id=$1`,
      [req.params.id]
    );
    //console.log(reviews);
    // console.log(restaurant);
    res.status(200).json({
      status: "ok",
      results: restaurant.rows.length,
      data: {
        // there is only one record id matches
        restaurants: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  //console.log(req.body);

  try {
    // returning * for by default postgres not return value which is created or updated so we need mention returning *

    const result = await db.query(
      `INSERT INTO restaurants(name,location,price_range) values($1,$2,$3) returning *`,
      [req.body.name, req.body.location, req.body.price_range]
    );
    //  console.log(result);
    res.status(201).json({
      status: "ok",
      data: {
        restaurants: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Update the restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  //  console.log(req.params.id);
  // console.log(req.body);

  try {
    const result = await db.query(
      `UPDATE restaurants SET name=$1,location=$2,price_range=$3 where id=$4 returning *`,
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    //console.log(result);
    res.status(200).json({
      status: "ok",
      data: {
        restaurants: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//Delete the restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query(`DELETE FROM restaurants where id=$1`, [
      req.params.id,
    ]);
    res.status(204).json({
      status: "ok",
    });
  } catch (error) {
    console.log(error);
  }
});

// inserting data in reviews table
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const addReview = await db.query(
      `INSERT INTO reviews (restaurant_id, name, review, rating) values($1,$2,$3,$4) returning *`,
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(addReview);
    res.status(201).json({
      status: "ok",
      data: {
        reviews: addReview.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
