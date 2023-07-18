import "../css/components/featuredProducts.css";
import useFetch from "../hooks/useFetch";

const Test = ({ subCategories }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  return (
    <div>
      {console.log("test DATA", data)}
      {/* {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
        <div className="featuredProducts__all-container">
          {console.log("TEST DATA", data)}
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
      )} */}
    </div>
  );
};
export default Test;
