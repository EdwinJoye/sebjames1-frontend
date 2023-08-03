import Facebook from "../img/icons/facebook-black.png";
import Instagram from "../img/icons/instagram-black.png";
import Send from "../img/icons/send-black.png";
import Pinterest from "../img/icons/pinterest-black.png";

import "../css/pages/contact.css";
const Contact = () => {
  return (
    <div className="contact container fadeIn">
      <div className="contact__all-container">
        <section className="contact__section1">
          <img
            className="contact__img"
            src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691074750/sebjames/seb_Contact_ec38917ebc.jpg"
            alt=""
          />
        </section>
        <section className="contact__section2">
          <h1>Contact Me</h1>
          <div className="contact__section-part1">
            <form className="contact__form" action="/contact">
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                placeholder="Full Name"
              ></input>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
              ></input>
              <input
                type="text"
                name="message"
                id="firstName"
                required
                placeholder="Message"
              ></input>
              <button className="contact__button" type="submit">
                Contact Me
              </button>
            </form>
            <div className="contact__contact-container">
              <div className="contact__infos-container">
                <div className="contact__infos-title">Contact</div>
                <div>sebj19@gmail.com</div>
                <div>06 30 77 46 30</div>
              </div>
              <div className="contact__infos-container">
                <div className="contact__infos-title">Based in</div>
                <div>Chaville</div>
                <div>Hauts-de-Seine</div>
              </div>
              <div className="contact__icons-container">
                <a href="https://www.facebook.com/seb.james.98">
                  <img src={Facebook} alt="fb" />
                </a>
                <a href="https://www.instagram.com/sebjamesart/">
                  <img src={Instagram} alt="insta" />
                </a>
                <a href="mailto:sebj19@gmail.com">
                  <img src={Send} alt="send" />
                </a>
                <a href="https://www.pinterest.fr/sebj19/">
                  <img src={Pinterest} alt="pinterest" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contact;
