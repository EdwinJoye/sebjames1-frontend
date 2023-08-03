import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import "../css/pages/interviews.css";

const Interviews = () => {
  const { data } = useFetch(`/interviews?populate=*`);
  return (
    <div className="fadeIn">
      <div className="container">
        {data?.map((item) => {
          return (
            <div className="interviews__all-container" key={item.id}>
              <div className="interviews__infos-container">
                <>
                  <h2>{item.attributes.title}</h2>
                  <div className="interviews__date">{item.attributes.date}</div>
                </>
                <span>{item.attributes.article}</span>
                <a className="interviews__button" href={item.attributes.link}>
                  Accéder au site
                </a>
              </div>
              <div className="interviews__video-container">
                <video
                  className="interviews__video"
                  controls
                  type="video/mp4"
                  src={item.attributes.video.data[0].attributes.url}
                ></video>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Interviews;
