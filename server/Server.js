const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const db = require("./db");

// middleware to retrive Json data from body
app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM restaurants");
    console.log(result);
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
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(res);

  res.status(200).json({
    status: "ok",
    data: {
      restaurant: ["maondlads", "pune"],
    },
  });
});

//Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "ok",
    data: {
      restaurant: ["maondlads", "pune"],
    },
  });
});

//Update the restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "ok",
    data: {
      restaurant: ["maondlads", "pune"],
    },
  });
});

//Delete the restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "ok",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
