import "./App.css";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden w-full relative">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
