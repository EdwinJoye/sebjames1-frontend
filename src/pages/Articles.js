import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import Footer from "../components/Footer";
import "../css/pages/articles.css";

const Articles = () => {
  const { data, loading, error } = useFetch(`/ars?populate=*`);
  return (
    <div className="fadeIn">
      <img
        className="articles__img-top"
        src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691144568/sebjames/Sans_titre_ba2c8b781e.png"
        alt="articlesImg"
      />
      <div className="articles__absolute">
        <div className="articles-all-container">
          <h1>They talk about Seb</h1>
          {error ? (
            "Something wrong"
          ) : loading ? (
            "loading"
          ) : (
            <>
              <div className="articles__articles-container">
                {data?.map((item) => {
                  return (
                    <div key={item.id} className="articles__article-container">
                      {item.attributes.picture.data?.map((pic) => {
                        return (
                          <Article
                            key={pic.id}
                            title={item.attributes.title}
                            date={item.attributes.date}
                            article={item.attributes.article}
                            link={item.attributes.link}
                            media={item.attributes.mediaName}
                            picture={pic.attributes.url}
                            size={item.attributes.size}
                          ></Article>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Articles;
