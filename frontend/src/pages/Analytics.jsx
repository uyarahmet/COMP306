import React, { useState } from "react";
import styles from "./Analytics.module.css"; // Import your CSS module

const Analytics = () => {
  const [result, setResult] = useState(null);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:8000${endpoint}`);
      if (response.ok) {
        const result = await response.json();
        setResult(result);
      } else {
        throw new Error(`Failed to fetch data from ${endpoint}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.analyticsContainer}>
      <h2>Analytics</h2>
      <button className={styles.analyticsButton} onClick={() => fetchData("/average_price_per_area")}>
        Average Price per Area
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/homes_above_avg_price_in_neighborhood")}>
        Homes Above Average Price in Neighborhood
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/total_listings_per_city")}>
        Total Listings per City
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/average_price_of_homes_with_more_than_twobathrooms_and_inside_site")}>
        Average Price of Homes with More Than Two Bathrooms and Inside Site
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/cities_more_than_two_home_listing_with_brutmt140")}>
        Cities More Than Two Home Listings With Brut Area More Than 140
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/top_five_largest_homes_for_sale_in_city")}>
        Top Five Largest Homes For Sale in City
      </button>
      <button className={styles.analyticsButton} onClick={() => fetchData("/avg_listing_prices_per_neighborhood")}>
        Average Price of Listings For Each Existing Neighborhood
      </button>

      {result && (
        <div className={styles.resultContainer}>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Analytics;
