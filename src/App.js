import react, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom"
import './App.css'

function Layout(){
  return (
    <react.Fragment>
      <nav>
        <Link to="/">
          <button/>
        </Link>
        <Link to="/about">
          <button/>
        </Link>
        <Link to="/offer">
          <button/>
        </Link>
        <Link to="/projects">
          <button/>
        </Link>
      </nav>

      <Outlet/>
    </react.Fragment>
  )
}

function Page1() {
  return (
    <react.Fragment>
      <div className="photo"/>
      <div className="text">
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </div> 
    </react.Fragment>
  )
}

function Page2() {
  return (
    <div className='about'>
      <div className="profile">
        <div className="profile--text">
          <h2>Angelus</h2>
          <h3>Programador e designer.</h3>
        </div>
        <button/>
        <button/>
        <button/>
      </div> 
      <section>
        <h1>Sobre mim</h1>
        <h2>
          Tenho 4 anos de experiência em programação 
          e design, e tenho certeza que posso ajudar
          sua empresa alcançar seus objetivos!
        </h2>
      </section>
      
      <aside>
        <div>
          <div/>
          <h2>Telefone</h2>
        </div>
        <h3>(81) 99564-0616</h3>
        
        <div>
          <div/>
          <h2>Email</h2>
        </div>
        <h3>angelusrt@gmail.com</h3>
      </aside>
    </div>
  )
}

function Page3() {
  return (
    <section className='offer'>
      <div>
        <h1>Posso oferecer</h1>
        <button>
          <h2>Sites Dinâmicos</h2>
          <h3>React.js</h3>
        </button>
        <button>
          <h2>Apps responsivos</h2>
          <h3>React Native e Expo</h3>
        </button>
        <button>
          <h2>Layouts UI/UX engajadores</h2>
          <h3>Figma e Affinity Designer</h3>
        </button>
        <button>
          <h2>Servidores e banco de dados</h2>
          <h3>Node.js, express.js e mongoDB</h3>
        </button>
      </div>
    </section>
  )
}

function Page4() {
  return (
    <section className='projects'>
      <div className='title'>
        <h1>Projetos</h1>
      </div>
      <section>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
      </section>
    </section>
  )
}

function App() {
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(() => {
    const updateWindowDimensions = () => setHeight(window.innerHeight)
  
    window.addEventListener("resize", updateWindowDimensions)
    
    return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, [])
  
  return (
    <div className="App" style={{
      height: `${height}px`,
    }}>
      <Routes > 
        <Route path="/" element={<Layout/>}>
          <Route index element={<Page1/>}/>
          <Route path="about" element={<Page2/>}/>
          <Route path="offer" element={<Page3/>}/>
          <Route path="projects" element={<Page4/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
