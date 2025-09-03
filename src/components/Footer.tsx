import Logo from "../assets/Logo.png";
import FooterBg from "../assets/Footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-rule" aria-hidden />
          <div className="footer-brandline">
            <img className="footer-logo" src={Logo} alt="Woodies logo" />
          </div>

          <ul className="footer-info">
            <li>(012) 8967453</li>
            <li>woodies@gmail.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>

          <small>© 2020 WOODIES</small>
        </div>

        <div className="footer-visual">
          <img className="footer-image" src={FooterBg} alt="minimal desk" />
          <div className="footer-gradient" aria-hidden />
        </div>
      </div>
    </footer>
  );
}
