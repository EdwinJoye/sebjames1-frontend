import useFetch from "../hooks/useFetch";
import Card from "./Card.js";
import "../css/components/list.css";

const List2 = ({ subCats, maxPrice, catId, sort, goBack }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${"not available"}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list__all-container">
      {loading
        ? "loading"
        : data.map((item) => {
            return (
              <div className="list__img-container" key={item.id}>
                <Card
                  id={item.id}
                  goBack={goBack}
                  picture={item?.attributes?.img1?.data[0]?.attributes?.url}
                  title={item.attributes.title}
                  date={item.attributes.date}
                ></Card>
              </div>
            );
          })}
    </div>
  );
};

export default List2;
