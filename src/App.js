import Header from "./components/Header";
import About from "./components/About";
import styles from "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/languageContext";

function App() {
  return (
    <div className={styles.main}>
      <LanguageProvider>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;