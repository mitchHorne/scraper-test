import express from "express";
import getRecipe from "./get_recipes.js";
import getResults from "./get_results.js";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  console.log(req.body);
  await getRecipe(req.body.url);
  res.sendStatus(200);
});

app.get("/results", async (req, res) => {
  const results = await getResults();
  res.send({ results });
});

app.listen(port);
