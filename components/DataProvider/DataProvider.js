import React, { useContext, useEffect, useCallback } from "react";

const DataContext = React.createContext({});

const DataProvider = ({ children, sections, container }) => {
  const [data, setData] = React.useState({
    currentSection: 0,
    numSections: sections.length,
  });
  const scrollRef = React.useRef({
    oldScroll: 0,
    aggScroll: 0,
  });

  useEffect(() => {
    if (!container) return;
    const handleMouseWheel = (e) => {
      if (new Date().getTime() > scrollRef.current.oldScroll + 500) {
        scrollRef.current.aggScroll += e.deltaY > 0 ? 0.75 : -0.75;
        if (Math.abs(scrollRef.current.aggScroll) >= 1) {
          const scrollDelta = scrollRef.current.aggScroll > 0 ? 1 : -1;
          const currentSection = Math.min(
            Math.max(data.currentSection + scrollDelta, 0),
            data.numSections - 1
          );
          setData({
            ...data,
            currentSection,
          });
          sections[currentSection].current.scrollIntoView();
          scrollRef.current.aggScroll = 0;
        }
        scrollRef.current.oldScroll = new Date().getTime();
      }
    };

    container.addEventListener("wheel", handleMouseWheel);
    return () => {
      container.removeEventListener("wheel", handleMouseWheel);
    };
  }, [container, data, sections]);

  const scrollToSectionFromIndex = useCallback(
    (currentSection) => {
      setData({
        ...data,
        currentSection,
      });
      sections[currentSection].current.scrollIntoView();
    },
    [data, sections]
  );

  return (
    <DataContext.Provider value={{ data, setData, scrollToSectionFromIndex }}>
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
