import { useState } from "react";
import { ColumnViewProps } from "./ColumnView.type";

const ColumnView = ({ onClick, data, render }: ColumnViewProps) => {
  const [activeItems, setActiveItem] = useState<{ [key: number]: number }>({});
  
  const handleListItemClick = ({ level, id, row }: { level: number, id: number, row: any }) => {
    setActiveItem((activeItems) => ({ ...activeItems, [level]: id }));
    onClick({ level, id, row });
  };

  return (
    <div className="container-fluid py-2 vh-100">
      <div className="row h-100 flex-nowrap">
        {Object.entries(data).map(([level, columnData], index: number) => (
          <div key={`wrapper-${level}`} className={`col-3 border text-center list-group px-0`}>
            {Array.isArray(columnData) && columnData.map((row: any) => {
              const { parentId, id, path } = row;
              const isActive = activeItems[index + 1] === id;
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
  );
};

export default ColumnView;
