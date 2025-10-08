import styles from "./Contact.module.css";
import { contactLinks } from "../data/contactLinks.js";
import { useLanguage } from "../contexts/languageContext.js";

const Contact = () => {
  const { isEnglish } = useLanguage();

  const content = {
    pt: {
      title: "Vamos Trabalhar Juntos?",
      subtitle: "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo através de um dos canais abaixo!",
      availability: "🟢 Disponível para novos projetos",
      response: "Respondo em até 24 horas"
    },
    en: {
      title: "Let's Work Together?",
      subtitle: "I'm always open to new opportunities and interesting projects. Get in touch with me through one of the channels below!",
      availability: "🟢 Available for new projects",
      response: "I respond within 24 hours"
    }
  };

  const current = isEnglish ? content.en : content.pt;

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{current.title}</h2>
          <p className={styles.subtitle}>
            {current.subtitle}
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>{contact.icon}</div>
              <div className={styles.contactInfo}>
                <h3 className={styles.contactName}>{contact.name}</h3>
                <p className={styles.contactValue}>{contact.value}</p>
              </div>
              <div className={styles.contactArrow}>→</div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.availability}>
            {current.availability}
          </p>
          <p className={styles.response}>
            {current.response}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;