import React, { useContext } from "react";

const DataContext = React.createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = React.useState({
    currentSection: 0,
    numSections: 1,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useDataContext cannot be used outside of a DataProvider");
  return context;
};

export { useDataContext, DataProvider };
