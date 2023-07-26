import useFetch from "../hooks/useFetch";
import Slider from "../components/Slider";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
import Test from "../components/Test";
import "../css/pages/home.css";

const Home = () => {
  const picsUrl = [];
  const { data, loading, error } = useFetch(`/screens?populate=*`);

  return (
    <div className="home__all-container fadeIn">
      {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
        <div>
          {data && (
            <div>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    {item.attributes.picture.data && (
                      <div>
                        {item.attributes.picture.data.map((pics) => {
                          return (
                            <div key={pics.id} className="none">
                              {picsUrl.push(pics.attributes.formats.large.url)}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      <Slider picsUrl={picsUrl}></Slider>
      <Propositions></Propositions>
      <FeaturedProducts type={"available"}></FeaturedProducts>
      <FeaturedProducts type={"new"}></FeaturedProducts>
      <Test subCategories={"trending"}></Test>
    </div>
  );
};
export default Home;
