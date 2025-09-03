import { Link } from "react-router-dom";
import HeroImg from "../assets/Home.png";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Are you looking for <strong>wooden furniture</strong> for your place?
          </p>
          <h1>
            This is the <span>Right Place</span>
          </h1>
          <Link to="/categories" className="btn btn-primary">
            Explore Categories
          </Link>
        </div>
        <img className="hero-img" src={HeroImg} alt="round white table" />
      </div>
    </section>
  );
}
