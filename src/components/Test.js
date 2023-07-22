import "../css/components/featuredProducts.css";
import useFetch from "../hooks/useFetch";

const Test = () => {
  const { data, loading, error } = useFetch(`/products?populate=*`);
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
              <div key={item.id}>
                <img
                  src={item?.attributes?.img1?.data[0]?.attributes?.url}
                  alt="pics"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Test;
