import "./Testimonies.css";

const Testimonies = (props) => {
  return (
    <div className="testimoniesBox">
      <div className="testimony">
        <div className="imageTestimonyContainer">
          <img
            className="imageTestimony"
            src={require(`../../images/imagesTestimonies/${props.image}.png`)}
            alt="Imagen de Alexandra"
          />
        </div>
        <div>
          <p className="nameTestimony">
            {" "}
            <b>{props.name}</b>{" "}
          </p>
          <p className="textTestimony">"{props.testimony}"</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
