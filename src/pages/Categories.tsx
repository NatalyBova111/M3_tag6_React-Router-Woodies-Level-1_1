import { Link } from "react-router-dom";
import Tisch from "../assets/Tisch.png";
import Stuhl from "../assets/Stuhl.png";
import Schuesseln from "../assets/Schuesseln.png";
import Group34 from "../assets/Group 34.png"; // если не работает из-за пробела — переименуй в Group34.png

function Card({ title, image, to }: { title: string; image: string; to: string }) {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-title">{title}</div>
      <Link to={to} className="btn btn-secondary">Shop now</Link>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow eyebrow-lg">
          <img className="eyebrow-icon" src={Group34} alt="" aria-hidden />
          What we have
        </span>
        <h2 className="ghost">PRODUCTS</h2>
      </div>
      <div className="cards">
        <Card title="Jenson" image={Tisch} to="/products/jenson" />
        <Card title="Deon" image={Stuhl} to="/products/deon" />
        <Card title="Krisha" image={Schuesseln} to="/products/krisha" />
      </div>
    </section>
  );
}


