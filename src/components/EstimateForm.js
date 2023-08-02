import "../css/components/estimateForm.css";

const EstimateForm = () => {
  return (
    <div>
      <form id="myQuote" className="estimateForm" action="/estimate">
        <div className="estimateForm-section1">
          <h1>Personal Information</h1>
          <div className="estimateForm__infos-container">
            <div className="estimateForm__infos">
              <div className="estimateForm__small-title">Name</div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="First name"
              ></input>
            </div>
            <div className="estimateForm__infos">
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="Last name"
              ></input>
            </div>
          </div>
          <div className="estimateForm__infos-container">
            <div className="estimateForm__infos">
              <div className="estimateForm__small-title">Phone Number</div>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="(415) 523-0057"
              ></input>
            </div>
            <div className="estimateForm__infos">
              <div className="estimateForm__small-title">Email</div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@email.com"
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="estimateForm-section2">
          <h1>About your project</h1>
          <div className="estimateForm__section2-all-container">
            <div className="estimateForm__infos-container2">
              <div className="estimateForm__infos-2">
                <div className="estimateForm__small-title">
                  Project location
                </div>
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Zip Code"
                ></input>
              </div>
              <div className="estimateForm__infos-2">
                <div className="estimateForm__small-title">
                  where is the wall ?
                </div>
                <select name="project_location">
                  <option value="inside">Inside</option>
                  <option value="outside">Outside</option>
                </select>
              </div>
              <div className="estimateForm__infos-2">
                <div className="estimateForm__small-title">
                  When do you want your project ?
                </div>
                <select id="project_time" name="project_time">
                  <option value="tout_de_suite">right away</option>
                  <option value="un_mois">in a month</option>
                  <option value="deux_mois">in two months</option>
                  <option value="cette_annee">this year</option>
                  <option value="annee_prochaine">next year</option>
                  <option value="pas_de_date_precise">
                    I don't have a specific date
                  </option>
                </select>
              </div>
            </div>

            {/* /////////////// */}

            <div className="estimateForm__infos-container2">
              <div className="estimateForm__infos-2">
                <div className="estimateForm__small-title">Description</div>
                <input
                  className="estimateForm__description-input"
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Zip Code"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="estimateForm__button-container">
          <button className="estimateForm__button" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};
export default EstimateForm;
