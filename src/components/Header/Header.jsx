import owlterLogoBranco from "../../assets/images/owlter-branco.png";
import owlterLogoPreto from "../../assets/images/owlter-preto.png";
import "./Header.css";

export default function Header() {
    return (
        <>
            <header>
                <nav className="nav-main">
                    <img src={ owlterLogoBranco }/>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>FAQ</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}