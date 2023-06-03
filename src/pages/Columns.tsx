import { useEffect } from "react";
import useColumnView from "../common/ColumnView/useColumnView"
import { columnData as dummyColumnData, columnL1Data } from "../constants/columnView";
import { ClickEvent, Render } from "../common/ColumnView/ColumnView.type";

const ColumnViewPage = () => {
  const handleItemClick = ({ row, level }: ClickEvent) => {
    const { id } = row;
    const data = dummyColumnData[level];
    const matchingChildren = Array.isArray(data) ? data.filter(({ parent_category_id }: any) => parent_category_id === id) : [];     
    setColumnData({ level, data: matchingChildren });
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

  const { ColumnContainer, setColumnData, activePath } = useColumnView({
    onClick:handleItemClick,
    render: renderItem
  });
  
  useEffect(() => {
    setColumnData({ level: 0, data: columnL1Data });
  }, []);
  console.log(activePath);
  
  return (
    <div>
      <ColumnContainer />
    </div>
  );
}

export default ColumnViewPage