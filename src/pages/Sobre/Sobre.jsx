import { InfoCard } from './../../components/InfoCard/InfoCard';
import './Sobre.css'; 
import img1 from './../../assets/images/img1.png';
import img2 from './../../assets/images/img2.png';
import img3 from './../../assets/images/img3.png';
import icons1 from './../../assets/images/icons1.png';
import icons2 from './../../assets/images/icons2.png';
import icons3 from './../../assets/images/icons3.png';
import { motion } from 'framer-motion';

export default function Sobre() {
  const cards = [
    {
      icon: icons1,
      title: 'Prevenção de tragédias',
      text: 'Muitos desastres naturais se agravam pela falta de informações rápidas e confiáveis. Nosso projeto busca reduzir riscos e salvar vidas ao alertar comunidades com antecedência.'
    },
    { image: img1 },
    { image: img2 },
    {
      icon: icons2,
      title: 'Fortalecimento da resposta local',
      text: 'Quando as pessoas compartilham relatos e atualizações, toda a comunidade se fortalece. Queremos incentivar a colaboração para que todos estejam mais preparados e protegidos.'
    },
    {
      icon: icons3,
      title: 'Minimizar impactos sociais e ambientais',
      text: 'Ao identificar rapidamente áreas de risco, ajudamos a evitar deslocamentos perigosos, reduzir perdas materiais e proteger o meio ambiente e a infraestrutura local.'
    },
    { image: img3 },
  ];

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sobre-projeto">
        <div className="sobre-topo">
          <div className='caixa-titulo'>
            <h2>Por que este</h2>
            <p className="subtitulo">projeto existe?</p>
          </div>
          <div className='caixa-descricao'>
            <p className="descricao">
              Criamos uma plataforma colaborativa para monitorar desastres naturais em tempo real, promovendo segurança, prevenção e resposta rápida. Acreditamos que informação compartilhada pode salvar vidas.
            </p>
          </div>
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
