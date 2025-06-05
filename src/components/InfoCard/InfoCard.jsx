import { motion } from 'framer-motion';
import './InfoCard.css'; // certifique-se de manter os estilos

export function InfoCard({ title, text, image, icon }) {
  const onlyImage = image && !title && !text && !icon;

  return (
    <motion.div
      className="info-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      {onlyImage ? (
        <img src={image} alt={title} className="card-image-full" />
      ) : (
        <>
          {image && <img src={image} alt={title} className="card-image-top" />}
          <div className="card-content">
            {icon && (
              <div className="card-icon">
                <img src={icon} alt={title} className="card-icon-image" />
              </div>
            )}
            {title && <h3 className="card-title">{title}</h3>}
            {text && <p className="card-text">{text}</p>}
          </div>
        </>
      )}
    </motion.div>
  );
}
