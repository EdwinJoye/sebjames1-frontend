import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import List2 from "../components/List2";
import "../css/pages/shop.css";

const Shop = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?populate=*[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="container shop__all-container">
      {console.log("SHOP DATA", data)}
      <div className="shop__left">
        <div className="shop__filterItem">
          <h2>Product Category</h2>
          {error ? (
            "Something wrong"
          ) : loading ? (
            "loading"
          ) : (
            <div>
              {data?.map((item) => {
                return (
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor="1">{item.attributes.title}</label>
                  </div>
                );
              })}
            </div>
          )}
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
        <List2
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        ></List2>
      </div>
    </div>
  );
};
export default Shop;
