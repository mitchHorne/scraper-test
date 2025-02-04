import fs from "fs";

async function getResults() {
  const recipeScraperDir = `${process.cwd()}/src/data/recipe-scraper.json`;
  const dimfuRecipeScraperDir = `${process.cwd()}/src/data//@dimfu/recipe-scrape.json`;
  const rethoraRecipeScraperDir = `${process.cwd()}/src/data/@rethora/url-recipe-scraper.json`;

  const recipeData = JSON.parse(fs.readFileSync(recipeScraperDir));
  const dimfuData = JSON.parse(fs.readFileSync(dimfuRecipeScraperDir));
  const rethoraData = JSON.parse(fs.readFileSync(rethoraRecipeScraperDir));

  return { recipeData, dimfuData, rethoraData };
}

export default getResults;
