import { useEffect, useState } from "react";
import { ColumnViewProps, ColumnViewData, Insert, ColumnViewDataItem } from "./ColumnView.type";

const useColumnView = ({ onClick, render, itemKey = 'id' }: ColumnViewProps) => {
  const [activeItems, setActiveItem] = useState(new Map());
  const [columnData, setColumnData] = useState(new Map());

  const updateActiveItem = ({ id, level }: { level: number, id: number }) => {
    setActiveItem((activeItems) => {
      if(activeItems.size < level) return new Map(activeItems.set(level, id));

      const updatedActiveItems = Array.from(activeItems).reduce((acc: any, [key, value]: any) => {
        const activeLevel = +key;
        if(activeLevel < level) {
          acc.set(activeLevel, value);
        } else if(activeLevel === level) {
          acc.set(activeLevel, id);
        }
        return acc;
      }, new Map());
  
      return updatedActiveItems;
    });
  }

  const handleListItemClick = ({ level, id, row }: { level: number, id: number, row: any }) => {
    updateActiveItem({ id, level });
    onClick({ level, id, row });
  };

  const insert = ({ level, data }: Insert) => {
    setColumnData((columnData) => new Map(columnData.set(level + 1, data)));
  }

  const getActivePath = () => {
    const activeItemsData = Array.from(columnData).reduce((acc: any, [key, value]: any) => {
      const activeId = activeItems.get(key);
      if(activeItems.get(key)) {
        acc.push(...value.filter((each: ColumnViewDataItem) => each[itemKey] === activeId));
      }
      return acc;
    }, []);
    return activeItemsData;
  }

  useEffect(() => {
    const greatestActiveLevel = activeItems.size ? Math.max(...[...activeItems.keys()]) : 0;

    Array.from(columnData.keys()).forEach((key) => {
      if(key > (greatestActiveLevel + 1)) {
        setColumnData((columnData) => {
          const clonedMap = new Map(columnData);
          clonedMap.delete(key)
          return clonedMap;
        });
      }
    });
  }, [activeItems, columnData]);
  
  return {
    setColumnData: insert,
    activePath: getActivePath(),
    ColumnContainer: () => (
      <div className="container-fluid py-2 vh-100">
        <div className="row h-100 flex-nowrap">
          {Array.from(columnData).map(([level, columnData], index: number) => (
            <div key={`wrapper-${level}`} className={`col-3 border text-center list-group px-0`}>
              {Array.isArray(columnData) && columnData.map((row: any) => {
                const { id } = row;
                const isActive = activeItems.get(index + 1) === id;
  
                return (
                  <div key={id} onClick={() => handleListItemClick({ level: +level, id, row })}>
                    {render({ isActive, row })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    )
  };
};

export default useColumnView;
