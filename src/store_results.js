import fs from "fs";

function formatResults(storedData, platform, url, data) {
  return [
    ...storedData,
    {
      platform,
      url,
      data,
    },
  ];
}

function getData(dir) {
  return JSON.parse(fs.readFileSync(dir, "utf8"));
}

async function storeResults(platform, url, data) {
  if (platform === "recipe-scraper") {
    const dir = `${process.cwd()}/src/data/recipe-scraper.json`;
    const storedData = getData(dir);
    const newData = formatResults(storedData, platform, url, data);
    fs.writeFileSync(dir, JSON.stringify(newData));
  }

  if (platform === "@dimfu/recipe-scraper") {
    const dir = `${process.cwd()}/src/data/@dimfu/recipe-scrape.json`;
    const storedData = getData(dir);
    const newData = formatResults(storedData, platform, url, data);
    fs.writeFileSync(dir, JSON.stringify(newData));
  }

  if (platform === "@rethora/url-recipe-scraper") {
    const dir = `${process.cwd()}/src/data/@rethora/url-recipe-scraper.json`;
    const storedData = getData(dir);
    const newData = formatResults(storedData, platform, url, data);
    fs.writeFileSync(dir, JSON.stringify(newData));
  }
}

export default storeResults;
