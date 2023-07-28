import useFetch from "../hooks/useFetch";
import Card from "./Card.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../css/components/list.css";

const List2 = ({ subCats, maxPrice, catId, sort, goBack }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${"not available"}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list__all-container">
      {data.length > 0 && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          gutter="20"
        >
          <Masonry>
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  goBack={goBack}
                  picture={item?.attributes?.img1?.data[0]?.attributes?.url}
                  title={item.attributes.title}
                  date={item.attributes.date}
                ></Card>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default List2;
