import { useLanguage } from "../contexts/languageContext";
import Card from "./common/Card";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";
import { generateProjectId, formatTech } from "../utils/formatText";

const Projects = () => {
  const { isEnglish } = useLanguage();

  const content = {
    pt: {
      title: "Projetos",
      descriptions: [
        "Liderei o desenvolvimento do dashboard principal com gráficos interativos e relatórios em tempo real para monitoramento de dados.",
        "Desenvolvi um site e-commerce responsivo com foco em alta conversão e experiência do usuário otimizada.",
        "Projetei e desenvolvi meu site de portfólio pessoal do zero, apresentando projetos e habilidades de forma moderna e interativa."
      ]
    },
    en: {
      title: "Projects",
      descriptions: [
        "Led the development of the main dashboard with interactive charts and real-time reports for data monitoring.",
        "Built a responsive e-commerce site with high-conversion focus and optimized user experience.",
        "Designed and developed my personal portfolio website from scratch, showcasing projects and skills in a modern and interactive way."
      ]
    }
  };

  const current = isEnglish ? content.en : content.pt;

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>{current.title}</h2>
      <div className={styles.projectsGrid}>
        {projects.map((proj) => (
          <Card
            key={generateProjectId(proj.name)}
            title={proj.name}
            tech={proj.tech.map(formatTech)}
            description={proj.description}
            image={proj.image}
            link={proj.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;