import Footer from "../components/Footer";
import "../css/pages/biography.css";

const Biography = () => {
  return (
    <div className="biography fadeIn">
      <section className="section1">
        <img
          className="biography__img"
          src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1690821283/sebjames/seb_7f6c26445e.jpg"
          alt=""
        />
      </section>
      <section className="section2">
        <h1>Biographie</h1>
        <div>
          <div>
            Seb James est une espèce endémique aux rues de Sèvres où il sévit
            officielement depuis ses premiers pas dans l'art mural en 1998. Né à
            Eastbourne au Royaume-Unis en 1975 d'une mère argentine et d'un père
            anglais, il grandit dans la campagne du East Susex où il suit son
            cursus scolaire élémentaire. Alors que la plupart de ses camarades
            se pasionnent pour le foot-ball ou le rugby, plus solitaire, il
            préfère s'immerger dans la nature où il commence à développer sa
            sensibilité artistique. À 12 ans, ses parents s'installent en
            France. Ils choisissent la ville de Sèvres, où il intègre le collège
            international puis au Lycée de Sèvres où il rejoint la section A3
            option art. Il découvre là un monde où la culture et l'art font
            partie du tissu local et du patrimoine de la ville et de la région.
            Eux deux foyers historiques de nombreuses personnalités.
          </div>
          <div></div>
          Au fil des rencontres avec les artistes de la région, naît une
          émulation qui l'entraînera dans le développement d’un univers visuel
          qu'il expose sur ses carnets de croquis et plus tard sur les murs des
          villes qui l'ont vu grandir. Formé à l'école Estienne de 1993 à 1998,
          il obtient un diplôme d'illustrateur médical et didactique. Il est
          également membre ardent de l'estampe de Chaville, sous l'égide d'André
          Bongibault, son maître depuis 2002. Il y poursuit une œuvre gravée
          conséquente. Artiste profondément marqué par ses aïeux, il forge sa
          réputation et son graphisme en adoptant un style rétro, souvent
          développé à partir de cartes postales, fortement empreint du
          patrimoine local, tout en laissant une grande ouverture à d'autres
          formes d'expresion inspirées du graffiti et de l'histoire de l'art
          contemporain. Son univers est fortement empreint de l’histoire du
          transport feroviaire, aérien et routier.
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Biography;
