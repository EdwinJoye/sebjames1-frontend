import useFetch from "../hooks/useFetch";
import Card from "../components/Card.js";

const List2 = ({ subCats, maxPrice, catId, sort }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  //   &sort=price:${sort}

  return (
    <div className="portfolio__imgs-container">
      {data && (
        <div>
          {loading
            ? "loading"
            : data.map((item) => {
                return (
                  <div key={item.id}>
                    {item.attributes.img1.data.map((pic) => {
                      return (
                        <div className="portfolio__img-container" key={pic.id}>
                          {console.log("LIST2", item.id)}
                          <Card
                            id={item.id}
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