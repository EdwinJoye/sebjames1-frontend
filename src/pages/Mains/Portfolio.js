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
        "http://localhost:1337/api/screens?populate=*"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  return (
    <div>
      {/* <Header isActive={isActive}></Header> */}
      {/* {console.log(data.data[0].attributes.publishedAt)} */}

      {console.log(data)}
      <img src="http://localhost:1337/uploads/screen_1_7dd00ca93d.jpg" alt="" />
      <div>
        {/* {data.data.attributes.map((item, key) => {
          return (
            <div key={key}>
              <img src={item} alt="" />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default Portfolio;
