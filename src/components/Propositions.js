import { Link } from "react-router-dom";
import "../css/components/propositions.css";

const Propositions = () => {
  return (
    <div className="propositions__all-container">
      <div className="propositions__title-img-container">
        <h4>Faire un devis</h4>
        <Link className="propositions__img-container">
          <img
            src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1687818431/sebjames/tableau_9_c9c6a9c566.jpg"
            alt="prop1"
          />
        </Link>
      </div>
      <div className="propositions__title-img-container">
        <h4>Portfolio</h4>
        <Link to="/portfolio" className="propositions__img-container">
          <img
            src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1687277349/sebjames/gravure_3_5e4510822c.jpg"
            alt="prop2"
          />
        </Link>
      </div>
      <div className="propositions__title-img-container">
        <h4>Prints</h4>
        <Link to="/shop" className="propositions__img-container">
          <img
            src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1687818431/sebjames/tableau_9_c9c6a9c566.jpg"
            alt="prop3"
          />
        </Link>
      </div>
    </div>
  );
};

export default Propositions;
