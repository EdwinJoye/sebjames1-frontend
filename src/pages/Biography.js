import Signature from "../img/signatures/signature-black.png";
import Footer from "../components/Footer";
import "../css/pages/biography.css";

const Biography = () => {
  return (
    <div className="biography fadeIn">
      <img
        className="biography__img-top"
        src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691145238/sebjames/Sans_titre_c610d1aa3e.png"
        alt=""
      />

      <div className="biography__absolute">
        <div className="biography__all-container">
          <div className="biography__infos-container">
            <div className="biography__title-top-container">
              <div>
                {/* <img src={Signature} alt="title" /> */}
                <div>Biography</div>
                <div className="biography__title-top">Sebastien James</div>
              </div>
            </div>
            <div className="biography__img-text-container">
              <div>
                <img
                  className="biography__img-top-left"
                  src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691142878/sebjames/Sans_titre_be20e8098e.png"
                  alt="Sèvres"
                />
                <div className="biography__subTitle">
                  Vue générale de Sèvres
                </div>
              </div>
              <div className="biography__title-txt-container-right">
                <h1>L'arrivée à Sèvres</h1>
                <div className="biography__txt">
                  Seb James est une espèce endémique aux rues de Sèvres où il
                  sévit officielement depuis ses premiers pas dans l'art mural
                  en 1998. Né à Eastbourne au Royaume-Unis en 1975 d'une mère
                  argentine et d'un père anglais, il grandit dans la campagne du
                  East Susex où il suit son cursus scolaire élémentaire. Alors
                  que la plupart de ses camarades se pasionnent pour le
                  foot-ball ou le rugby, plus solitaire, il préfère s'immerger
                  dans la nature où il commence à développer sa sensibilité
                  artistique.
                </div>
              </div>
            </div>

            <div className="biography__img-text-container">
              <div className="biography__title-txt-container-left">
                <h1>Les premiers pas dans l'art</h1>
                <div className="biography__txt">
                  À 12 ans, ses parents s'installent en France. Ils choisissent
                  la ville de Sèvres, où il intègre le collège international
                  puis au Lycée de Sèvres où il rejoint la section A3 option
                  art. Il découvre là un monde où la culture et l'art font
                  partie du tissu local et du patrimoine de la ville et de la
                  région : eux deux foyers historiques de nombreuses
                  personnalités. Au fil des rencontres avec les artistes de son
                  nouveau lieu de vie, naît une émulation qui l'entraînera dans
                  le développement d’un univers visuel qu'il expose sur ses
                  carnets de croquis et plus tard sur les murs des villes qui
                  l'ont vu grandir.
                </div>
              </div>
              <div>
                <img
                  className="biography__img-right"
                  src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691137627/sebjames/large_e10b9d92db.jpg"
                  alt="marches"
                />
                <div className="biography__subTitle">
                  Les 144 marches qui mènent au Lycée
                </div>
              </div>
            </div>

            <div className="biography__img-text-container">
              <div>
                <img
                  className="biography__img-left"
                  src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691087450/sebjames/Ecole_Estienne_Paris_476d8ff16d.jpg"
                  alt="Estienne"
                />
                <div className="biography__subTitle">L’école Estienne</div>
              </div>
              <div className="biography__title-txt-container-right">
                <h1>Un passage à l'École Estienne</h1>
                <div className="biography__txt">
                  Formé à l'école Estienne de 1993 à 1998, il obtient un diplôme
                  d'illustrateur médical et didactique. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>

            <div className="biography__img-text-container">
              <div className="biography__title-txt-container-left">
                <h1>L'Estampe de Chaville</h1>
                <div className="biography__txt">
                  Il est également membre ardent de l'estampe de Chaville, sous
                  l'égide d'André Bongibault, son maître depuis 2002. Il y
                  poursuit une œuvre gravée conséquente. Artiste profondément
                  marqué par ses aïeux, il forge sa réputation et son graphisme
                  en adoptant un style rétro, souvent développé à partir de
                  cartes postales, fortement empreint du patrimoine local, tout
                  en laissant une grande ouverture à d'autres formes d'expresion
                  inspirées du graffiti et de l'histoire de l'art contemporain.
                  Son univers est fortement empreint de l’histoire du transport
                  feroviaire, aérien et routier.
                </div>
              </div>
              <div>
                <img
                  className="biography__img-bottom-right"
                  src="https://res.cloudinary.com/dm0sv9nfx/image/upload/v1691137777/sebjames/100474461_10216175574397532_3411312542608261120_n_8c9832ce98.jpg"
                  alt="gravure"
                />
                <div className="biography__subTitle">
                  Seb James à l'Estampe de Chaville
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Biography;
