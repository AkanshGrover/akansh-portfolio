import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home';
import Projects from './pages/Projects';
import getProjectsInfo from './data/projects'
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

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "auto"});
  }, [active]);

  const [projectsInfo, setProjectsInfo] = useState({});

  useEffect(() => {
    async function loadProjectsInfo(){
      const data = await getProjectsInfo();
      setProjectsInfo(data);
    }
    loadProjectsInfo();
  }, [])

  const renderPage = () => {
    switch(active){
      case 0:
        return <Home/>

      case 1:
        return <Projects projectsInfo={projectsInfo}/>

      case 2:
        return <Experience/>
    }
  }

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive}/>
      <ThemeToggle theme={theme} toggletheme={toggletheme}/>
      <motion.div className="pageContainer" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.45}} key={active}>{renderPage()}</motion.div>
    </div>
  )
}

export default App
