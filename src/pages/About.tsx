import AboutImg from "../assets/About.png";
import Group34 from "../assets/Group 34.png"; // или Group34.png

export default function About() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="eyebrow eyebrow-lg">
          <img className="eyebrow-icon" src={Group34} alt="" aria-hidden />
          Who we are
        </span>
        <h2 className="ghost">ABOUT US</h2>
      </div>

      <div className="about-grid">
        <div className="about-art">
          <img src={AboutImg} alt="wood bowls" />
        </div>
        <div className="about-copy">
          <h3>
            WOODIES is the <strong>home of modern wooden furniture</strong>
          </h3>
          <p>the answer to your need for furniture with shapes, sizes and colors.</p>
        </div>
      </div>
    </section>
  );
}
