import { useEffect, useState } from "react";
import ColumnView from "../common/ColumnView"
import { columnL1Data, columnL2Data } from "../constants/columnView";
import { ClickEvent, ColumnViewData, Render } from "../common/ColumnView/ColumnView.type";

const ColumnViewPage = () => {
  const [navigationData, setNavigationData] = useState<ColumnViewData>({});

  const handleItemClick = ({ row, level }: ClickEvent) => {
    const { id } = row;
    const matchingChildren = columnL2Data.filter(({ parent_category_id }) => parent_category_id === id);    
    setNavigationData((navigationData) => ({
      ...navigationData,
      [level + 1]: matchingChildren
    }))
  };

  const renderItem = ({ row, isActive }: Render) => {
    const { label, id } = row;
    return (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>{label}</span>
        <p>{id}</p>
      </div>
    )
  }

  useEffect(() => {
    setNavigationData((navigationData) => ({ ...navigationData, 1: columnL1Data }));
  }, []);

  return (
    <div>
      <ColumnView
        onClick={handleItemClick}
        data={navigationData}
        render={renderItem}
      />
    </div>
  )
}

export default ColumnViewPage