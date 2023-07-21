import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
// import { useParams } from "react-router-dom";
import "../css/pages/portfolio.css";

const Portfolio = () => {
  // const catId = parseInt(useParams().id);
  const { data, loading, error } = useFetch(`/products?populate=*`);

  return (
    <div className="container fadeIn">
      <div className="portfolio__menu-container">
        <div className="portfolio__menu-left">
          <span>see all</span>
        </div>

        <div className="portfolio__menu-right">
          <button>
            <span>engravings</span>
          </button>
          <button>
            <span>watercolors</span>
          </button>
          <button>
            <span>frecoes</span>
          </button>
        </div>
      </div>
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
                  {item.attributes.img1.data.map((pic) => {
                    return (
                      <div className="portfolio__img-container" key={pic.id}>
                        <Card
                          id={item.id}
                          goBack={"portfolio"}
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
    </div>
  );
};
export default Portfolio;
