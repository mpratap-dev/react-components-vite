import { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import axios from "axios";

function Listing() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const getApiData = async ({ pageParam = 0 }) => {
    const response = await axios.get("https://dummyjson.com/products", {
      params: { skip: pageParam, limit: 30, q: searchTerm },
    });
    return response.data;
  };

  return (
    <div className="App">
      <input
        type="text"
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter search term"
      />
      <InfiniteScroll
        getApiData={getApiData}
        dataKey="products"
        containerClassName="list-group"
        itemClassName="list-group-item"
      >
        {({ title }) => (
            <span className="text-start d-block">{title}</span>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default Listing;
