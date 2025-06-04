import owlterLogoBranco from "../../assets/images/owlter-branco.png";
import owlterLogoPreto from "../../assets/images/owlter-preto.png";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            <header>
                 <div className={`container-nav-alt ${scrolled ? 'ativo' : ''}`}>
                    <nav className="nav-alt" style={{ display: scrolled ? "flex" : "none" }}>
                        <img src={ owlterLogoBranco }/>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>FAQ</li>
                        </ul>
                    </nav>
                </div>
                <div className={`container-nav-main ${scrolled ? 'ativo' : ''}`}>
                    <nav className="nav-main" style={{ display: scrolled ? "none" : "flex" }}>
                        <img src={ owlterLogoPreto }/>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>FAQ</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}