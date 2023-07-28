const Estimate = () => {
  return (
    <div className="container fadeIn">
      <div>ESTIMATE</div>
      <form action="/estimate">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Project description"
          />
          <input
            type="text"
            name="zone"
            id="zone"
            placeholder="Project description"
          />
        </div>
        <div>
          <h1>About your project</h1>
          <div>
            <div>Where should the craftsman paint?</div>
            <input type="checkbox" name="description" id="description" />
          </div>
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Estimate;
