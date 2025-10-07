import Card from "./common/Card";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

// Import das imagens
import wisehomeImage from "../assets/wisehome.png";
import atribuaumaestrelaImage from "../assets/atribuaumaestrela.png";
import kjpaversolutionsImage from "../assets/kjpaversolutions.png";

const projectImages = {
  wisehome: wisehomeImage,
  atribuaumaestrela: atribuaumaestrelaImage,
  kjpaversolutions: kjpaversolutionsImage
};

const Projects = () => (
  <section id="projects" className={styles.projectsSection}>
    <h2 className={styles.projectsTitle}>Projetos</h2>
    <div className={styles.projectsGrid}>
      {projects.map((proj, idx) => (
        <Card
          key={idx}
          title={proj.name}
          tech={proj.tech}
          description={proj.description}
          image={projectImages[proj.imageKey]} // Agora usa o import
          link={proj.link}
        />
      ))}
    </div>
  </section>
);

export default Projects;