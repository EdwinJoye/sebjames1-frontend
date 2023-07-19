import productsData from "../data/products.json";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card.js";

const List2 = ({ subCats, maxPrice, catId, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );

  return (
    <div className="portfolio__imgs-container">
      {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
        <div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                {console.log("LIST2 subCats", subCats)}
                {item.attributes.img1.data.map((pic) => {
                  return (
                    <div className="portfolio__img-container" key={pic.id}>
                      {console.log("LIST2 ITEM", item)}
                      <Card
                        picture={pic.attributes.url}
                        title={item.attributes.title}
                        date={item.attributes.date}
                      ></Card>
                    </div>
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

export default List2;
