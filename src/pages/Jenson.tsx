import Tisch from "../assets/Tisch.png";
import Group34 from "../assets/Group 34.png";

export default function Jenson() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow eyebrow-lg">
          <img className="eyebrow-icon" src={Group34} alt="" aria-hidden />
          Jenson
        </span>
        <h2 className="ghost">PRODUCTS</h2>
      </div>
      <div className="product">
        <div className="product-art">
          <img src={Tisch} alt="Jenson table" />
        </div>
        <p className="product-copy">
          Jenson demonstrates what designer Tim Fenby does best. Clean lines,
          subtle curves and an oak finish nail this season's trends. Boomerang
          legs add serious style points — not that this dining table needs it.
          Nordic retro? You got it.
        </p>
      </div>
    </section>
  );
}
