import { InfoCard } from './../../components/InfoCard/InfoCard';
import './Sobre.css'; 
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.png'
import img3 from './../../assets/images/img3.png'
import icon1 from './../../assets/images/icon1.png'
import Footer from '../../components/Footer/Footer';

export default function Sobre() {
  const cards = [
    { icon: icon1 , title: 'Lorem ipsum dolor.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula.' },
    { image: img1 },
    { image: img2 },
    { icon: icon1 , title: 'Lorem ipsum dolor.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula.' },
    { icon: icon1 , title: 'Lorem ipsum dolor.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et. Proin quis porttitor ligula.' },
    { image: img3 },
  ];

  return (
    <div className="page-wrapper">
      <div className="sobre-projeto">
        <div className="sobre-topo">
          <div className='caixa-titulo'>
            <h2>Sobre o projeto</h2>
            <p className="subtitulo">Causa blabla</p>
          </div>
          <div className='caixa-descricao'>
            <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet magna augue, a scelerisque quam efficitur et.</p>
          </div>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
