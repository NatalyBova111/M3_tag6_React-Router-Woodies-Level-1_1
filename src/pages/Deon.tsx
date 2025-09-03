import Stuhl from "../assets/Stuhl.png";
import Group34 from "../assets/Group 34.png";

export default function Deon() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow eyebrow-lg">
          <img className="eyebrow-icon" src={Group34} alt="" aria-hidden />
          Deon
        </span>
        <h2 className="ghost">PRODUCTS</h2>
      </div>
      <div className="product">
        <div className="product-art">
          <img src={Stuhl} alt="Deon chair" />
        </div>
        <p className="product-copy">
          Deon is a comfy, modern chair with a soft seat and beech legs. A
          minimalist silhouette made for everyday use at home or in the office.
        </p>
      </div>
    </section>
  );
}
