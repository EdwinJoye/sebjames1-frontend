import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Card from "../components/Card";
// import { useParams } from "react-router-dom";
import "../css/pages/portfolio.css";

const Portfolio = () => {
  const [categoryId, setCategoryId] = useState(null);
  const categories = useFetch(`/categories?populate=*`);
  const category = useFetch(
    `/categories/${categoryId}?populate[products][populate][fields][0]=title&populate[products][populate][img1][populate]=*`
  );

  const handleItemClick = (itemId) => {
    setCategoryId(itemId);
  };

  return (
    <div className="container fadeIn">
      <div className="portfolio__menu-container">
        <div className="portfolio__menu-left">
          <span>see all</span>
        </div>
        <div className="portfolio__menu-right">
          {categories?.data?.map((item) => {
            return (
              <div key={item.id} onClick={() => handleItemClick(item.id)}>
                <span>{item.attributes.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="portfolio__imgs-container">
        {category?.data?.attributes?.products?.data?.map((item) => {
          return (
            <div key={item.id} className="portfolio__img-container fadeIn">
              <Card
                id={item?.id}
                goBack={"portfolio"}
                picture={item?.attributes?.img1?.data[0]?.attributes?.url}
                title={item?.attributes?.title}
                date={item?.attributes?.date}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
