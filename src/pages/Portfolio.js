import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Card from "../components/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
      <div className="portfolio__imgs-container fadeIn">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {category?.data?.attributes?.products?.data?.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item?.id}
                  goBack={"portfolio"}
                  picture={item?.attributes?.img1?.data[0]?.attributes?.url}
                  title={item?.attributes?.title}
                  date={item?.attributes?.date}
                ></Card>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};
export default Portfolio;
