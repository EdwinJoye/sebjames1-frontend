import { Link } from "react-router-dom";
import "../css/components/article.css";

const Article = ({ title, article, media, picture, date, link, size }) => {
  return (
    <div className="article__all-container">
      <Link to={link}>
        <div
          className={
            size === "large"
              ? "article__picture-large"
              : "article__picture-tall"
          }
        >
          <img src={picture} alt="articlePic" />
        </div>
      </Link>

      <div className="article__media-date-txt-article">
        <h4 className="article__title ">{title}</h4>
        <div className="article__media">{media}</div>
        <div className="article__date">{date}</div>
        <div className="article__article">{article}</div>
        <div className="article__lireLaSuite">
          <a href={link}>Lire la suite</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
