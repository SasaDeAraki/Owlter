export function InfoCard({ title, text, image, icon }) {
  const onlyImage = image && !title && !text && !icon;

  return (
    <div className="info-card">
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
    </div>
  );
}
