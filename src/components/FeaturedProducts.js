import "../css/components/featuredProducts.css";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div>
      {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
        <div className="featuredProducts__all-container">
          {data?.map((item) => {
            return (
              <div key={item.id} className="test-1">
                {item.attributes.img1.data.map((pic) => {
                  return (
                    <div key={pic.id} className="child">
                      <img
                        className="child"
                        src={pic.attributes.url}
                        alt="pics"
                      />
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
export default FeaturedProducts;
