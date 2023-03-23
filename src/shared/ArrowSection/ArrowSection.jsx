import "./ArrowSection.scss";
import longarrow from "../../media/icons/longarrow.png";

function ArrowSection({ id, head1, head2, description, classname}) {
  return (
    <section id={id} className={`ArrowSection ${classname}`}>
      <div className="arrow-section-left">
        <h3>{head1}</h3>
        <div>
          <h3 className="thin">{head2}</h3>
          <img src={longarrow} alt="" />
        </div>
      </div>
      <p>{description}</p>
    </section>
  );
}

export default ArrowSection;
