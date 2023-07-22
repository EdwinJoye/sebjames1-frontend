import "../css/components/article.css";

const Article = ({ title, article, media, picture, date, link }) => {
  return (
    <div className="article__all-container">
      <h4>{title}</h4>
      <div className="article__media-date">
        <div className="article__media">{media}</div>
        <div className="article__media">{date}</div>
      </div>
      <img className="article__picture" src={picture} alt="articlePic" />
      <div className="article__article">{article}</div>
      <div className="article__lireLaSuite">
        <a href={link}>Lire la suite</a>
      </div>
    </div>
  );
};

export default Article;
