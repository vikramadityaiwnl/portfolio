import "./App.css";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Space } from "./components/Space";
import { GoToTop } from "./components/GoToTop";

function App() {
  return (
    <Space>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <GoToTop />
    </Space>
  );
}

export default App;
