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
    <div className="container">
      {data && (
        <div className="test">
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
