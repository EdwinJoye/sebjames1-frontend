import axios from "axios";
import { useEffect, useState } from "react";

import "../../css/pages/home.css";

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
    <div>
      {console.log(data, "DATA PORTFOLIO")}
      {/* <img src="http://localhost:1337/uploads/screen_1_7dd00ca93d.jpg" alt="" /> */}
      {data.data && (
        <div>
          {data.data.map((item) => {
            // console.log(item);
            return (
              <>
                {item.attributes.picture.data.map((picture) => {
                  return <img src={picture.attributes.formats.medium.url} />;
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
