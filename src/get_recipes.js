import recipeScraper from "recipe-scraper";
import dimfuRecipeScraper from "@dimfu/recipe-scraper";
import getUrlRecipe from "@rethora/url-recipe-scraper";

import storeResults from "./store_results.js";

async function getRecipe(url) {
  try {
    const recipe = await recipeScraper(url);
    storeResults("recipe-scraper", url, recipe);
  } catch (err) {
    storeResults("recipe-scraper", url, err.message);
  }

  try {
    const recipe = await dimfuRecipeScraper(url);
    storeResults("@dimfu/recipe-scraper", url, recipe);
  } catch (err) {
    storeResults("@dimfu/recipe-scraper", url, err.message);
  }

  try {
    const recipe = await getUrlRecipe(url);
    storeResults("@rethora/url-recipe-scraper", url, recipe);
  } catch (err) {
    storeResults("@rethora/url-recipe-scraper", url, err.message);
  }
}

export default getRecipe;
