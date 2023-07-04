import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import "../css/pages/shop.css";

const Shop = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="container shop__all-container">
      <div className="shop__left">
        <div className="shop__filterItem">
          <h2>Product Category</h2>
          <div>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">engraving</label>
          </div>
          <div>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">watercolor</label>
          </div>
          <div>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">paintings</label>
          </div>
          <div>
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">sketchs</label>
          </div>
        </div>
        <div className="shop__filterItem">
          <h2>Filter by price</h2>
          <div>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="shop__filterItem">
          <h2>Sort by</h2>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => {
                setSort("asc");
              }}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => {
                setSort("desc");
              }}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="shop__right">
        <List catId={catId} maxPrice={maxPrice} sort={sort}></List>
      </div>
    </div>
  );
};
export default Shop;
