const Estimate = () => {
  return (
    <div className="container fadeIn">
      <div>ESTIMATE</div>
      <form action="/estimate">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        ></input>
        <input
          type="text"
          name="secondName"
          id="secondName"
          placeholder="Second Name"
          required
        ></input>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          placeholder="telephone"
        ></input>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@gmail.com"
          required
        ></input>
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company Name"
        ></input>
        <input
          type="text"
          name="adress"
          id="adress"
          placeholder="Adress"
        ></input>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Estimate;
