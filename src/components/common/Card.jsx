import styles from "./Card.module.css";

const Card = ({ title, description, tech, image, link, className }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${className || ""}`}
    >
      <div className={styles.imageContainer}>
        {image && (
          <>
            <img
              src={image}
              alt={title}
              className={styles.projectImage}
              onError={handleImageError}
            />
            <div 
              className={styles.imageFallback}
              style={{ display: 'none' }}
            >
              Preview Indisponível
            </div>
          </>
        )}
        <div className={styles.imageOverlay}></div>
        <div className={styles.linkIcon}>
          <svg viewBox="0 0 24 24">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </div>
      </div>
      
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {tech && Array.isArray(tech) && (
          <div className={styles.techStack}>
            {tech.map((techItem, index) => (
              <span key={index} className={styles.techItem}>
                {techItem}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;