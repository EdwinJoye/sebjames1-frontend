import productsData from "../data/products.json";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card.js";

const List = ({ subCats, maxPrice, catId, sort }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  return (
    <div className="portfolio__imgs-container">
      {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
        <div>
          {data && (
            <div>
              {data?.map((item) => {
                return (
                  <div key={item.id}>
                    {item.attributes.img1.data.map((pic) => {
                      return (
                        <div className="portfolio__img-container" key={pic.id}>
                          <Card
                            id={pic.id}
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
      )}
    </div>
  );
};

export default List;
