import './Home.css';
import imgcell from '../../assets/images/cell-phone.png';
import placeholder from '../../assets/images/placeholder.jpg';
import img_rel from '../../assets/images/img-rel.png';
import img_cor from '../../assets/images/img-cor.png';
import img_pes from '../../assets/images/img-pes.png';
import img_fed from '../../assets/images/img-fed.png';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container-first-section'>
        <div className='first-section-text'>
          <h1>Mapeando riscos, salvando vidas com tecnologia</h1>
          <p>
            Conectamos pessoas a informações vitais em tempo real. Nossa plataforma ajuda você a monitorar desastres, enviar alertas e proteger comunidades com precisão e agilidade.
          </p>
        </div>
        <div className='banner'>
          <img src={placeholder} alt="Banner principal" />
        </div>
      </div>

      <div className='pitch-section'>
        <div>
          <iframe
            width="760"
            height="515"
            src="https://www.youtube.com/embed/-RS-jl78_lY?si=1P3Y9NFM5fBhIyQF"
            title="Vídeo pitch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className='pitch-texto'>
          <h2>Informação confiável quando mais importa</h2>
          <p>Nossa missão é oferecer dados claros e acessíveis sobre riscos e desastres, ajudando você a tomar decisões seguras em momentos críticos.</p>
        </div>
      </div>

      <div className='app-section'>
        <div className='app-text-section'>
          <div className='text-s-title'>
            <h2>Fique seguro, esteja informado</h2>
            <p>Acompanhe eventos críticos em sua região e colabore com informações locais. Juntos, tornamos as cidades mais resilientes e protegemos vidas.</p>
          </div>

          <div className='app-cards-section'>
            <div className='card-row'>
              <div className='card'>
                <img src={img_rel} alt="Alertas em tempo real" />
                <div>
                  <h3>Alertas em tempo real</h3>
                  <p>Receba notificações imediatas sobre desastres próximos e futuros.</p>
                </div>
              </div>
              <div className='card'>
                <img src={img_cor} alt="Mapa interativo" />
                <div>
                  <h3>Mapa interativo</h3>
                  <p>Visualize eventos e áreas de risco atualizadas por usuários e autoridades.</p>
                </div>
              </div>
            </div>

            <div className='card-row'>
              <div className='card'>
                <img src={img_pes} alt="Comunidade colaborativa" />
                <div>
                  <h3>Comunidade colaborativa</h3>
                  <p>Compartilhe relatos locais e ajude a validar informações.</p>
                </div>
              </div>
              <div className='card'>
                <img src={img_fed} alt="Feedback inteligente" />
                <div>
                  <h3>Feedback inteligente</h3>
                  <p>Contribua com atualizações sobre alertas para manter todos informados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='app-image-section'>
          <img src={imgcell} alt="Celular com aplicativo" />
        </div>
      </div>
    </motion.div>
  );
}
