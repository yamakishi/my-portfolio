import { useState, useEffect } from 'react';
import styles from "./Header.module.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Atualizar seção ativa baseada no scroll
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <div 
          className={styles.logo}
          onClick={() => scrollToSection('home')}
        >
          GY
        </div>

        <div 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
        </div>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section} className={styles.navItem}>
              <a 
                href={`#${section}`}
                className={`${styles.navLink} ${
                  activeSection === section ? styles.navLinkActive : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                  scrollToSection(section);
                }}
              >
                {section === 'home' && 'Início'}
                {section === 'about' && 'Sobre'}
                {section === 'projects' && 'Projetos'}
                {section === 'skills' && 'Habilidades'}
                {section === 'contact' && 'Contato'}
              </a>
              {activeSection === section && (
                <div className={styles.navIndicator}></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;