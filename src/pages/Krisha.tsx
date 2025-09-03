import Bowls from "../assets/Schuesseln.png";
import Group34 from "../assets/Group 34.png";

export default function Krisha() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow eyebrow-lg">
          <img className="eyebrow-icon" src={Group34} alt="" aria-hidden />
          Krisha
        </span>
        <h2 className="ghost">PRODUCTS</h2>
      </div>
      <div className="product">
        <div className="product-art">
          <img src={Bowls} alt="Krisha bowls" />
        </div>
        <p className="product-copy">
          Krisha is a set of wooden bowls with a beautiful grain and a durable
          finish. They’re practical, eco-friendly, and perfect for serving.
        </p>
      </div>
    </section>
  );
}
