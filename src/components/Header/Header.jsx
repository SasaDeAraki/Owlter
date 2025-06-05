import owlterLogoBranco from "../../assets/images/owlter-branco.png";
import owlterLogoPreto from "../../assets/images/owlter-preto.png";
import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header>
            <div className={`container-nav-main ${!scrolled ? 'ativo' : ''}`}>
                <nav className="nav-main">
                    <Link to="/">
                        <img src={owlterLogoPreto} alt="Owlter logo preto" />
                    </Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`container-nav-alt ${scrolled ? 'ativo' : ''}`}>
                <nav className="nav-alt">
                    <Link to="/">
                        <img src={owlterLogoBranco} alt="Owlter logo branco" />
                    </Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
