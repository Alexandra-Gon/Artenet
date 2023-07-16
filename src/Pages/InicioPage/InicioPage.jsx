import { Link } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Testimonies from "../../Components/Testimonies/Testimonies";
import "./InicioPage.css";

const InicioPage = () => {
  return (
    <div className="initialPage">
      <Carousel />
      <h1 className="tittleProducts">PRODUCTOS</h1>
      <div className="cubesInicioContainer">
        <Link className="cubesInicio cubesColorPurple" to={`/productos/papeleria`}>
          <h2 className="textCubes">PAPELERÍA</h2>
          <img
            className="imgCube"
            src={require("../../images/papeleria.png")}
            alt="Icono de papeleria"
          />
        </Link>
        <Link className="cubesInicio cubesColorYellow" to={`/productos/arte`}>
            <h2 className="textCubes">ARTE</h2>
            <img
              className="imgCube"
              src={require("../../images/arte.png")}
              alt="Icono de arte"
            />
        </Link>
        <Link className="cubesInicio cubesColorBlue" to={`/productos/detalles`}>
          <h2 className="textCubes">DETALLES</h2>
          <img
            className="imgCube"
            src={require("../../images/detalles.png")}
            alt="Icono de detalles"
          />
        </Link>

      </div>
      <div className="publicidadContainer">
        <h2 className="textPublicidad">
          Visitanos para tener el gusto de atenderte
        </h2>
      </div>
      <div>
        <h2 className="textTestimonios">Testimonios de clientes</h2>
        <div className="testimoniesContainer">
          <div className="testimoniesBox">
            <Testimonies
              image="alexandra"
              name="Alexandra G"
              testimony="Dignissim porta mi, ac consequat magna placerat vel. In congue nibh ut justo facilisis blandit. Phasellus viverra dapibus porttitor."
            />
          </div>
          <div className="testimoniesBox">
            <Testimonies
              image="sandra"
              name="Sandra P"
              testimony="Dignissim porta mi, ac consequat magna placerat vel. In congue nibh ut justo facilisis blandit. Phasellus viverra dapibus porttitor."
            />
          </div>
          <div className="testimoniesBox">
            <Testimonies
              image="carlos"
              name="Carlos T"
              testimony="Dignissim porta mi, ac consequat magna placerat vel."
            />
          </div>
          <div className="testimoniesBox">
            <Testimonies
              image="manuela"
              name="Manuela V"
              testimony="Dignissim porta mi, ac consequat magna placerat vel. In congue nibh ut justo facilisis blandit. Phasellus viverra dapibus."
            />
          </div>
          <div className="testimoniesBox">
            <Testimonies
              image="adriana"
              name="Adriana P"
              testimony="Dignissim porta mi, ac consequat magna placerat vel. In congue nibh ut justo facilisis blandit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;
