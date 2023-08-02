import "../css/components/estimatePresentation.css";

const EstimatePresentation = ({ scrollToQuote }) => {
  return (
    <div className="estimatePresentation">
      <div className="estimatePresentation__part1-section1">
        <div className="estimatePresentation__part1-section1-1">
          <h1 className="estimatePresentation__part1-title">Painting Quote</h1>
          <h3 className="estimatePresentation__5minutes">
            In 5 minutes, request a painting quote from Sebastien James
          </h3>
          <div
            href="#"
            onClick={scrollToQuote}
            className="estimatePresentation__txt-button-container"
          >
            <div>FREE AND WITHOUT COMMITMENT</div>
            <div className="estimatePresentation__part1-button">
              <a href="#">ask for my quote</a>
            </div>
          </div>
        </div>
        <div className="estimatePresentation__part1-section1-2">
          <img
            className="estimatePresentation__img"
            src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690474674/sebjames/6a00d8341cd00753ef017ee5645de1970d_598d205860.jpg"
            alt="estimate"
          />
        </div>
      </div>
      <div className="estimatePresentation__part1-section2">
        A desire to brighten your living environment thanks to the talents of
        Seb James? <br /> Whether it is a small or large fresco, indoors or
        outdoors, <b>having paint quotes</b> drawn up to compare is strongly
        recommended.
      </div>
    </div>
  );
};

export default EstimatePresentation;
