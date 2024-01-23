import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  productList: [],
  isLoading: false,
});

export default function DataContextProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/all_listings");
      if (response.ok) {
        const result = await response.json();
        // Assuming the data structure is in result.listings_with_details
        //console.log(result.all_listings)
        setProductList(result.all_listings);
      } else {
        throw new Error("Data couldn't be fetched");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValues = {
    productList,
    isLoading,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
}
