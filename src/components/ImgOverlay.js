import "../css/components/imgOverlay.css";

const ImgOverlay = ({ picture, title, date }) => {
  return (
    <div className="overlay__all-container">
      <div className="overlay__img-container">
        <img src={picture} alt="engravings" />
      </div>
      <div className="overlay__container">
        <h3 className="overlay__title">{title}</h3>
        <div className="overlay__date">{date}</div>
      </div>
    </div>
  );
};

export default ImgOverlay;
