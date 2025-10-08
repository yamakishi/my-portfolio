import styles from "./About.module.css";
import linkedinPhoto from "../assets/linkedinPhoto.jpg";
import { skills } from "../data/skills";
import { useLanguage } from "../contexts/languageContext";
import { capitalizeWords } from "../utils/formatText";

const About = () => {
  const { isEnglish } = useLanguage();

  const content = {
    pt: {
      title: "Sobre Mim",
      description1: "Sou um ",
      highlight1: "desenvolvedor web",
      description1Cont: " com 3 anos de experiência construindo aplicações web modernas, escaláveis e de alta conversão. Especializo-me em ",
      highlight2: "React.js, Vue.js, Node.js, WordPress e SQL Server",
      description1End: ", entregando soluções com foco em performance, segurança e experiência do usuário.",
      description2: "Minha paixão é transformar ideias complexas em interfaces intuitivas e eficientes. Acredito que o código limpo e a arquitetura bem planejada são fundamentais para o sucesso de qualquer projeto digital.",
      languageSkill: "Além do português nativo, possuo ",
      languageHighlight: "inglês avançado",
      languageSkillEnd: ", o que me permite colaborar efetivamente em equipes internacionais e consumir documentação técnica sem barreiras.",
      stats: {
        experience: "Anos de Experiência",
        projects: "Projetos Concluídos",
        clients: "Clientes Satisfeitos"
      }
    },
    en: {
      title: "About Me",
      description1: "I'm a ",
      highlight1: "web developer",
      description1Cont: " with 3 years of experience building modern, scalable, and high-conversion web applications. I specialize in ",
      highlight2: "React.js, Vue.js, Node.js, WordPress, and SQL Server",
      description1End: ", delivering solutions focused on performance, security, and user experience.",
      description2: "My passion is transforming complex ideas into intuitive and efficient interfaces. I believe that clean code and well-planned architecture are fundamental to the success of any digital project.",
      languageSkill: "In addition to native Portuguese, I have ",
      languageHighlight: "advanced English",
      languageSkillEnd: ", which allows me to effectively collaborate with international teams and consume technical documentation without barriers.",
      stats: {
        experience: "Years of Experience",
        projects: "Projects Completed",
        clients: "Satisfied Clients"
      }
    }
  };

  const current = isEnglish ? content.en : content.pt;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>{current.title}</h2>
            <p className={styles.aboutDescription}>
              {current.description1}
              <span className={styles.highlight}>{current.highlight1}</span>
              {current.description1Cont}
              <span className={styles.highlight}>{current.highlight2}</span>
              {current.description1End}
            </p>
            <p className={styles.aboutDescription}>
              {current.description2}
            </p>
            <p className={styles.aboutDescription}>
              {current.languageSkill}
              <span className={styles.highlight}>{current.languageHighlight}</span>
              {current.languageSkillEnd}
            </p>
            
            <div className={styles.techStack}>
              {skills.map((skill, idx) => (
                <span key={idx} className={styles.techItem}>{capitalizeWords(skill)}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.aboutImage}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow}></div>
              <div className={styles.profileImage}>
                <img 
                  src={linkedinPhoto} 
                  alt="linkedin" 
                  className={styles.profileImg}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>{current.stats.experience}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>{current.stats.projects}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>{current.stats.clients}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;