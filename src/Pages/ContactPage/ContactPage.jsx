import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactPage.css";

const ContactPage = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contactContainer">
      <div className="contactTittle">
        <h2>Contacto</h2>
        <p className="contactText">
          Si quieres saber más sobre nuestros productos y servicios puedes
          escribirnos, ¡será un placer ponernos en contacto contigo!
        </p>
        <PhoneInTalkIcon />
        <p>Tel: + 57 3886607939</p>
        <MailOutlineIcon />
        <p>Email: contacto@artenet.com</p>
        <LocationOnIcon />
        <p>Dirección: Bogotá DC, Colombia</p>
      </div>

      <div className="contactForm">
        <h3>Envianos tu mensaje...</h3>
        <form
          className="form"
          action="send"
          method="post"
          onSubmit={formSubmit}
        >
          <label htmlFor="name">
            <input
              className="inputForm"
              type="text"
              placeholder="Nombre y apellido"
            />
          </label>
          <label htmlFor="email">
            <input
              className="inputForm"
              type="email"
              placeholder="Correo eléctronico"
            />
          </label>
          <label>
            <textarea
              className="inputForm"
              placeholder="Escribe tu comentario..."
              rows={4}
              cols={40}
            />
          </label>
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
