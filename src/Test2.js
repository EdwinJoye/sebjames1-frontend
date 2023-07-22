import axios from "axios";
import { useEffect, useState } from "react";
import ImgOverlay from "../components/ImgOverlay";
import "../css/pages/portfolio.css";

const Portfolio = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/upload/files?populate=*`
  );

  return (
    <div className="portfolio__all-container container">
      <div className="test">
        {data.map((item) => {
          return (
            <div>
              <ImgOverlay picture={item.formats.medium.url}></ImgOverlay>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
