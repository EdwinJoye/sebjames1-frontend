import { Link } from "react-router-dom";
import Signature from "../img/signatures/signature-black.png";
import Copyright from "../img/icons/copyright-black.png";
import "../css/components/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top-container">
        <div className="footer__infos-selections-container">
          <div className="footer__icon-infos-container">
            <img className="footer__icon" src={Copyright} alt="copyright" />
            <div className="footer__date">2023</div>
            <div>Edwin Joye</div>
          </div>
          <div className="footer__selections-container-left">
            <div className="footer__selections">
              <h5>About</h5>
              <Link to="/biography">
                <div>Biography</div>
              </Link>
              <Link to="/exhibitions">
                <div>Exhibitions</div>
              </Link>
              <Link to="/articles">
                <div>Articles</div>
              </Link>
              <Link to="/interviews">
                <div>Interviews</div>
              </Link>
            </div>
            <div className="footer__selections-small">
              <h5>Frescoe</h5>
              <Link to="/works">
                <div>Works</div>
              </Link>
              <Link to="/estimate">
                <div>Estimate</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__img-name-container">
          <img className="footer__img" src={Signature} alt="sign" />
          <Link to="/contact">
            <div className="footer__contact">Contact</div>
          </Link>
        </div>
        <div className="footer__selections-terms-container">
          <div className="footer__selections-container-right">
            <div className="footer__selections-small">
              <h5>Shop</h5>
              <Link to="/shop/:id">
                <div>Items</div>
              </Link>
              <Link to="/checkout">
                <div>Checkout</div>
              </Link>
            </div>
            <div className="footer__selections">
              <h5>Portfolio</h5>
              <div>Engraving</div>
              <div>Painting</div>
              <div>Watercolor</div>
              <div>Model</div>
            </div>
          </div>
          <div className="footer__terms-container">
            <div className="footer__terms">
              <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042193566">
                Privacy
              </a>
            </div>
            <div className="footer__terms">
              <a href="https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006069414/">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
