import axios from "axios";
import { useEffect, useState } from "react";
import ImgOverlay from "../components/ImgOverlay";
import "../css/pages/portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/upload/files?populate=*"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  return (
    <div className="container fadeIn">
      <div className="portfolio__menu-container">
        <div className="portfolio__menu-left">
          <span>see all</span>
        </div>
        <div className="portfolio__menu-right">
          <span>engravings</span>
          <span>watercolors</span>
          <span>frecoes</span>
        </div>
      </div>
      {data && (
        <div className="portfolio__imgs-container">
          {data.map((item) => {
            return (
              <div>
                {item.related &&
                  item.related.map((infos) => {
                    return (
                      <div>
                        <ImgOverlay
                          picture={item.formats.medium.url}
                          date={infos.date}
                          title={infos.title}
                        ></ImgOverlay>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Portfolio;
