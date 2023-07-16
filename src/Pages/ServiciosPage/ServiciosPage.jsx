import "./ServiciosPage.css";

const ServiciosPage = () => {
  return (
    <div className="servicesContainer">
      <h1 className="servicesTittle">Servicios</h1>
      <div className="colorInfoContainer">
        <div className="infoContainer">
          <img
            className="imgService"
            src={require("../../images/fotocopImpres.png")}
            alt="Publicidad sobre fotocopias e impresiones"
          />
          <p>
            In nec semper lorem. Nam risus ipsum, laoreet in tincidunt accumsan,
            faucibus id purus. Sed eget faucibus sem. Sed lobortis suscipit
            sapien eu accumsan. Cras sed nisl vel lectus porta finibus vel nec
            purus. Praesent suscipit leo eu sem auctor consequat. Sed volutpat
            augue eget efficitur luctus. Nullam fringilla, mi ut aliquam
            faucibus, nulla tellus lacinia enim, quis vehicula sapien nisi sit
            amet enim. Sed eget faucibus sem. Sed lobortis suscipit sapien eu
            accumsan. Cras sed nisl vel lectus porta finibus vel nec purus.
            Praesent suscipit leo eu sem auctor consequat. Sed volutpat augue
            eget efficitur luctus.
          </p>
        </div>
      </div>

      <div className="infoContainer">
      <img
          className="imgService"
          src={require("../../images/transcripciones1.png")}
          alt="Servicios de transcripción"
        />
        <p>
          In nec semper lorem. Nam risus ipsum, laoreet in tincidunt accumsan,
          faucibus id purus. Sed eget faucibus sem. Sed lobortis suscipit sapien
          eu accumsan. Cras sed nisl vel lectus porta finibus vel nec purus.
          Praesent suscipit leo eu sem auctor consequat. Sed volutpat augue eget
          efficitur luctus. Nullam fringilla, mi ut aliquam faucibus, nulla
          tellus lacinia enim, quis vehicula sapien nisi sit amet enim.
          Vestibulum viverra lacus nec orci interdum pretium. Cras faucibus,
          urna et rutrum venenatis, massa nisi scelerisque diam, sit amet
          iaculis enim massa a diam.
        </p>
        
      </div>
      <div className="colorTranscriptionContainer">
        <div className="infoContainer">
          <img
            className="imgService"
            src={require("../../images/transcripciones2.png")}
            alt="Servicios de transcripción"
          />
          <p>
            Vestibulum mattis tincidunt sapien quis viverra. Pellentesque ac
            felis ullamcorper, rutrum metus id, ultrices ante. Sed facilisis
            pulvinar mi ut semper. In venenatis aliquet quam, semper consectetur
            urna tempus vel. Fusce condimentum egestas lectus. Vivamus faucibus,
            elit ut eleifend porta, purus dui fermentum ex, rutrum vestibulum
            sem justo in est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiciosPage;
