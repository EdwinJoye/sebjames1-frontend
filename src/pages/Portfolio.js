import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/pages/portfolio.css";

const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/upload/files?populate=*"
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (collection) => {
    const filtered = photos.filter((photo) => photo.collection === collection);
    setFilteredPhotos(filtered);
  };
  return (
    <div className="container fadeIn">
      {console.log(filteredPhotos)}
      <div className="portfolio__menu-container">
        <div className="portfolio__menu-left">
          <span>see all</span>
        </div>

        <div className="portfolio__menu-right">
          <button onClick={() => handleFilter("engraving")}>
            <span>engravings</span>
          </button>

          <button onClick={() => handleFilter("watercolor")}>
            <span>watercolors</span>
          </button>
          <button onClick={() => handleFilter("frescoe")}>
            <span>frecoes</span>
          </button>
        </div>
      </div>
      {photos && (
        <div className="portfolio__imgs-container">
          {photos.map((item) => {
            return (
              <div className="portfolio__img-container" key={item.ids}>
                {item.related &&
                  item.related.map((infos) => {
                    return (
                      <Card
                        picture={item.formats.medium.url}
                        date={infos.date}
                        title={infos.title}
                      ></Card>
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
