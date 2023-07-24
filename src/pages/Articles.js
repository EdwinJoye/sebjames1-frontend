import useFetch from "../hooks/useFetch";
import Article from "../components/Article";
import "../css/pages/articles.css";

const Articles = () => {
  const { data, loading, error } = useFetch(`/ars?populate=*`);
  return (
    <div className="container">
      {error ? (
        "Something wrong"
      ) : loading ? (
        "loading"
      ) : (
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
      )}
    </div>
  );
};
export default Articles;
