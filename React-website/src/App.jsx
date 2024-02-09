import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componenets/navbar/Navbar'
import { About } from './componenets/About/About'
import  Footer  from './componenets/footer/Footer';
import Landpage from './componenets/laningpage/landpage'
import Projects from './componenets/Project/Projects'
import Contact from './componenets/contact/Contact'
import Skill from './componenets/skill/Skill'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landpage/>
      <About />
      <Projects />
      <Skill/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
