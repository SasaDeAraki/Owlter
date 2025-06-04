import './Footer.css'
import logo from './../../assets/images/owlter-branco.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
    </footer>
  );
}
