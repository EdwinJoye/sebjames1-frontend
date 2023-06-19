import axios from "axios";
// import Header from "../../components/Header";
import "../../css/pages/home.css";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/paintings");
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  return (
    <div>
      {console.log(data.data[0].attributes.ids)}
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
