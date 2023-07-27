import { Link } from "react-router-dom";
import "../css/components/card.css";

const Card = ({ picture, title, date, id, goBack }) => {
  return (
    <Link
      to={`/product/${id}`}
      state={{
        referer: goBack,
      }}
      // state={{ referer: goBack }}
    >
      <div className="overlay__all-container">
        <div className="overlay__img-container">
          <img src={picture} alt={`Shop Item ${id}`} />
        </div>
        <div className="overlay__container">
          <h3 className="overlay__title">{title}</h3>
          <div className="overlay__date">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
