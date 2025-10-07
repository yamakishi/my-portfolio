import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/languageContext';
import { useScrollToSection } from '../hooks/useScrollToSection';
import styles from "./Header.module.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = useScrollToSection();
  const { isEnglish, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset para detecção
      
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          // Se a posição do scroll está dentro da seção
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
            break;
          }
        }
      }
      
      // Fallback: se chegou no final da página, considera "contact"
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = 'contact';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Chama uma vez para definir a seção inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
  };

  const navItems = {
    about: isEnglish ? 'Home' : 'Início',
    projects: isEnglish ? 'Projects' : 'Projetos',
    contact: isEnglish ? 'Contact' : 'Contato'
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

        <div className={styles.navRight}>
          {/* Botão de Idioma */}
          <button 
            className={styles.languageBtn}
            onClick={toggleLanguage}
          >
            {isEnglish ? 'Traduzir para o Português' : 'Translate to English'}
          </button>

          {/* Menu Hamburguer */}
          <div 
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={styles.menuBar}></div>
            <div className={styles.menuBar}></div>
            <div className={styles.menuBar}></div>
          </div>
        </div>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
          {Object.entries(navItems).map(([section, label]) => (
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
                {label}
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