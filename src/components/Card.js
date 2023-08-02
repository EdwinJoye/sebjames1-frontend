import { Link } from "react-router-dom";
import "../css/components/card.css";

const Card = ({ picture, title, date, id, goBack, type }) => {
  return (
    <Link to={`/product/${id}`} state={{ availability: type, referer: goBack }}>
      <div className="overlay__all-container">
        <div className="overlay__img-container">
          <img src={picture} alt={`Shop Item ${id}`} />
        </div>
        <div className="overlay__container">
          <h2 className="overlay__title">{title}</h2>
          <div className="overlay__date">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
