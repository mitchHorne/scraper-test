import { useState, useEffect } from "react";

function renderData(data) {
  if (!data || !data?.length) return;
  return data.map((item, index) => {
    const { data: dataObject } = item;

    return (
      <>
        <h3>{item.url}</h3>
        {typeof dataObject === "string" ? (
          <p>{dataObject}</p>
        ) : (
          Object.keys(dataObject).map((key) => {
            const displayData =
              typeof dataObject[key] === "string"
                ? dataObject[key]
                : JSON.stringify(dataObject[key]);
            return (
              <p key={`item_${index}_${key}`}>
                {key}: {displayData}
              </p>
            );
          })
        )}
      </>
    );
  });
}

export const Data = ({ data }) => {
  const { recipeData: scraperData, dimfuData, rethoraData } = data;

  const [currentPackageData, setPackage] = useState(0);
  const [activeData, setActiveData] = useState(scraperData);

  useEffect(() => {
    if (currentPackageData === 0) setActiveData(scraperData);
    if (currentPackageData === 1) setActiveData(dimfuData);
    if (currentPackageData === 2) setActiveData(rethoraData);
  }, [currentPackageData, data]);

  return (
    <>
      <h1>Data</h1>
      <div>
        <button
          className={`package-button ${
            currentPackageData === 0 ? "active" : ""
          }`}
          onClick={() => setPackage(0)}
        >
          Scraper
        </button>
        <button
          className={`package-button ${
            currentPackageData === 1 ? "active" : ""
          }`}
          onClick={() => setPackage(1)}
        >
          @Dimfu
        </button>
        <button
          className={`package-button ${
            currentPackageData === 2 ? "active" : ""
          }`}
          onClick={() => setPackage(2)}
        >
          @rethora
        </button>
      </div>
      <div>{renderData(activeData)}</div>
    </>
  );
};

export default Data;
