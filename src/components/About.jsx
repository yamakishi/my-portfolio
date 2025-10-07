import styles from "./About.module.css";
import linkedinPhoto from "../assets/linkedinPhoto.jpg";
import { skills } from "../data/skills"; // import do array

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>Sobre Mim</h2>
          <p className={styles.aboutDescription}>
            Sou um <span className={styles.highlight}>desenvolvedor web</span> com 3 anos de experiência 
            construindo aplicações web modernas, escaláveis e de alta conversão. Especializo-me em 
            <span className={styles.highlight}> React.js, Vue.js, Node.js, WordPress e SQL Server</span>, 
            entregando soluções com foco em performance, segurança e experiência do usuário.
          </p>
          <p className={styles.aboutDescription}>
            Minha paixão é transformar ideias complexas em interfaces intuitivas e eficientes. 
            Acredito que o código limpo e a arquitetura bem planejada são fundamentais para o sucesso 
            de qualquer projeto digital.
          </p>
          
          {/* Tech Stack Dinâmica */}
          <div className={styles.techStack}>
            {skills.map((skill, idx) => (
              <span key={idx} className={styles.techItem}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className={styles.aboutImage}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.profileImage}>
              <img 
                src={linkedinPhoto} 
                alt="Foto de perfil" 
                className={styles.profileImg}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Anos de Experiência</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>Projetos Concluídos</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Clientes Satisfeitos</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
