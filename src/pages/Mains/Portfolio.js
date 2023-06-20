import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/pages/portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/engravings?populate=*"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  return (
    <div className="portfolio__all-container container">
      {data.data && (
        <div className="test">
          {data.data.map((item) => {
            return (
              <>
                {item.attributes.picture.data.map((picture) => {
                  return (
                    <div className="overlay__all-container">
                      <div className="overlay__img-container">
                        <img
                          src={picture.attributes.formats.medium.url}
                          alt="engravings"
                        />
                      </div>
                      <div className="overlay__container">
                        <div className="overlay__text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </div>
                        <div>25 JUIN 1987</div>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Portfolio;
