import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DataContext = createContext();

function DataProvider({ children }) {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // setisLoading(true);
        const response = await fetch('data.json'); // Replace 'data.json' with your file path
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let res = await response.json();
        console.log(location.pathname.slice(1));
        const locationName = location.pathname.slice(1);
        console.log('locationName ', locationName);
        console.log(res); // Access and use the data
        if (locationName) res = res[locationName];
        else res = res.destinations;
        console.log('Fetched: ', res);
        setData(res);
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
        console.error('Error fetching data:', error);
        setError('Error fetching data:');
      }
    }

    console.log('fetching...');
    setisLoading(true);
    fetchData();
  }, [location]);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error('DataContext is used outside of DataProvider');

  return context;
}

export { DataProvider, useData };
