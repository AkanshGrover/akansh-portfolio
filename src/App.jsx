import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home';
import Projects from './pages/Projects';
import getProjects from './data/projects'
import Experience from './pages/Experience';

function App() {

  const [active, setActive] = useState(0);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function toggletheme(){
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme])

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects(){
      const data = await getProjects();
      setProjects(data);
    }
    loadProjects();
  }, [])

  const renderPage = () => {
    switch(active){
      case 0:
        return <Home/>

      case 1:
        return <Projects projects={projects}/>

      case 2:
        return <Experience/>
    }
  }

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive}/>
      <ThemeToggle theme={theme} toggletheme={toggletheme}/>
      <div className="pageContainer">{renderPage()}</div>
    </div>
  )
}

export default App
