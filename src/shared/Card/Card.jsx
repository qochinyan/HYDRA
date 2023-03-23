import "./Card.scss";
import oval from "../../media/bg/cardoval.png";
function Card({ data }) {
  return (
    <div className="card-container">
      <img className="card-oval" src={oval} alt="" />
      <img className="card-img" src={data.img} alt="" />
      <h3 className="card-heading">{data.name}</h3>
      <p className="card-desc">
        Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor
        rhoncus libero justo laoreet sit amet vitae.
      </p>
      <button>TRY IT NOW</button>
    </div>
  );
}

export default Card;
