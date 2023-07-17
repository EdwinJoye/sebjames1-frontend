import useFetch from "../hooks/useFetch";
import Slider from "../components/Slider";
import Propositions from "../components/Propositions";
import FeaturedProducts from "../components/FeaturedProducts";
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
      <div className="home__slider-container">
        <Slider picsUrl={picsUrl}></Slider>
      </div>
      <Propositions></Propositions>
      <FeaturedProducts type={"engraving"}></FeaturedProducts>
      <FeaturedProducts type={"watercolor"}></FeaturedProducts>
      <FeaturedProducts type={"model"}></FeaturedProducts>
      <FeaturedProducts type={"painting"}></FeaturedProducts>
      <FeaturedProducts type={"frescoe"}></FeaturedProducts>
    </div>
  );
};
export default Home;
