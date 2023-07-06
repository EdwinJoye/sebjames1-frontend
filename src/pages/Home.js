import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import "../css/pages/home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const picsUrl = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/screens?populate=*"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <div className="home__all-container fadeIn">
      {data.data && (
        <div>
          {data.data.map((item) => {
            return (
              <div key={item.id}>
                {item.attributes.picture.data && (
                  <div>
                    {item.attributes.picture.data.map((pics) => {
                      return (
                        <div key={pics.id} className="none">
                          {picsUrl.push(pics.attributes.formats.large.url)}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="home__slider-container">
        <Slider picsUrl={picsUrl}></Slider>
      </div>
      <Propositions></Propositions>
      <FeaturedProducts type={"engravings"}></FeaturedProducts>
      <FeaturedProducts type={"watercolors"}></FeaturedProducts>
      <FeaturedProducts type={"models"}></FeaturedProducts>
      <FeaturedProducts type={"paintings"}></FeaturedProducts>
      <FeaturedProducts type={"frescoes"}></FeaturedProducts>
    </div>
  );
};
export default Home;
