import Header from "./components/Header";
import About from "./components/About";
import styles from "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;