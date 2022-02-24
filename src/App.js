import { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Data from "./Data.json"
import './App.css'

//global variables
const variants = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {staggerChildren: 0.2}}
}
const item = {
  hidden: {opacity: 0, x: "-5vw"},
  show: {opacity: 1, x: "0%"}
}
const aboutItemRigth = {
  hidden: {opacity: 0, x: "5vw"},
  show: {opacity: 1, x: "0"}
}

//Page3 helpers
function OfferButton(p) {
  console.log(p.id)
  return (
    <motion.button
      layout
      layoutId={p.id}
      variants={p.item}
      key={p.id}
      transition={{type: "spring", stiffness: 50}}
      onClick={p.onFunction}
    >
      <h3>{p.title}</h3>
      <h2>{p.subtitle}</h2>
    </motion.button>
  )
}
function OfferModal(p) {
  return(
    <motion.div
      layout
      layoutId={p.id}
      className='offer-modal'
      onClick={p.onFunction}
      exit={{opacity: 0}}
    >
      <div className='title'>
        <h3>{p.title}</h3>
        <h2>{p.subtitle}</h2>
      </div>
      <p>{p.body}</p>
    </motion.div>
  )
}
//Page4 Helpers
function ProjectsButton(p) {
  return (  
    <motion.div
      layout
      layoutId={p.id}
      variants={p.item}
      key={p.id}
      transition={{type: "spring", stiffness: 50}}
      onClick={p.setSelected}
    >
      <h3>{p.title}</h3>
      <h2>{p.subtitle}</h2>
    </motion.div>
  )
}
function ProjectsModal(p) {
  return(
    <motion.div
      layout
      layoutId={p.id}
      className='projects-modal'
      onClick={p.setSelected}
      exit={{opacity: 0}}
    >
      <div className='title'>
        <h3>{p.title}</h3>
        <h2>{p.subtitle}</h2>
      </div>
      <p>{p.body}</p>
    </motion.div>
  )
}

function Layout(p) {
  return (
    <>
      <motion.nav
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: !p.hide?1:0}}
        animate={{opacity: !p.hide?1:0, display: !p.hide?"flex":"none"}}
      >
        <Link to="/"/>
        <Link to="/about"/>
        <Link to="/offer"/>
        <Link to="/projects"/>
      </motion.nav>

      <Outlet/>
    </>
  )
}
//Page1
function Intro(p) {
  return (
    <div className='intro'>
      <motion.div 
        className="photo"
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: 0, x: "-50%", y: "-10vh"}}
        animate={{opacity: 1, y: "-50%"}}
      />
      <motion.div 
        className="text"
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: 0, x: "-5vw", y: "-50%"}}
        animate={{opacity: 1, x: p.m?"-50%":"0"}}
      >
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </motion.div> 
    </div>
  )
}
//Page2
function About(p) {
  return (
    <div className='about-container'>
      <motion.div 
        className="profile"
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: 0, x: p.m?"-50%":"0", y: "-10vh"}}
        animate={{opacity: 1, y: "0", x: p.m?"-50%":"0"}}
      >
        <div className="profile--text">
          <h2>Angelus</h2>
          <h3>Programador e designer.</h3>
        </div>
        <button/>
        <button/>
        <button/>
      </motion.div> 
      <motion.div 
        className="about"
        transition={{duration: 1}}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <section>
          <motion.h1
            transition={{type: "spring", stiffness: 50}}
            variants={item}
          >
            Sobre mim
          </motion.h1>
          <motion.h2
            transition={{type: "spring", stiffness: 50}}
            variants={item}
          >
            Tenho 4 anos de experiência em programação 
            e design, e tenho certeza que posso ajudar
            sua empresa alcançar seus objetivos!
          </motion.h2>
        </section>
        
        <aside>
          <motion.div
            transition={{type: "spring", stiffness: 50}}
            variants={p.m?aboutItemRigth:item}
          >
            <h3>Telefone</h3>
            <h2>(81) 99564-0616</h2>
          </motion.div>
          
          <motion.div
            transition={{type: "spring", stiffness: 50}}
            variants={p.m?aboutItemRigth:item}
          >
            <h3>Email</h3>
            <h2>angelusrt@gmail.com</h2>
          </motion.div>
        </aside>
      </motion.div>
    </div>
  )
}
//Page3
function Offer(p) {
  const [selected, setSelected] = useState(null)

  return (
    <>
      {
        !selected ?
        <div className='offer'>
          <motion.section 
            className='offer-section'
            variants={variants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              transition={{type: "spring", stiffness: 50}}
              initial={{opacity: 0, y: "-5vh"}}
              animate={{opacity: 1, y: "0%"}}
            >
              Posso oferecer
            </motion.h1>
            {
              Data.offer.map((i) => (
              <OfferButton
                id={i.id}
                item={item}
                title={i.title}
                subtitle={i.subtitle}
                onFunction={() => {
                  setSelected(i)
                  p.setHide()
                }}
              /> 
              ))
            }
          </motion.section>
        </div> :
        <AnimatePresence initial={false} >
          {
            selected && 
            <OfferModal 
              id={selected.id}
              title={selected.title}
              subtitle={selected.subtitle}
              body={selected.body}
              onFunction={() => {
                setSelected(null)
                p.setHide()
              }}
            />
          }
        </AnimatePresence>
      }
    </>
  )
}
//Page4
function Projects(p) {
  const [selected, setSelected] = useState(null)

  return (
    <div className='projects'>
      {
        !selected ?
        <>
          <motion.div 
            className='header'
            transition={{type: "spring", stiffness: 50}}
            initial={{opacity: 0, x: p.m?"-50%":"0", y: "-5vh"}}
            animate={{opacity: 1, y: "0", x: p.m?"-50%":"0"}}
          >
            <h1>Projetos</h1>
          </motion.div>
          <motion.section
            variants={variants}
            initial="hidden"
            animate="show"
          >
            {
              Data.projects.map((i) => (
                <ProjectsButton
                  id={i.id}
                  item={item}
                  title={i.title}
                  subtitle={i.subtitle}
                  setSelected={() => setSelected(i)}
                />
              ))
            }
          </motion.section> 
        </> :
        <AnimatePresence initial={false} >
          <ProjectsModal 
            id={selected.id}
            title={selected.title}
            subtitle={selected.subtitle}
            body={selected.body}
            setSelected={() => setSelected(null)}
          />
        </AnimatePresence>
      }
    </div>
  )
}

function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [m, setM] = useState(window.matchMedia("(min-width: 680px)").matches)
  const[hide,setHide] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const updateWindowDimensions = () => setHeight(window.innerHeight)
    const updateM = () => setM(window.matchMedia("(min-width: 680px)").matches)

    window.addEventListener("resize", updateWindowDimensions)
    window.matchMedia("(min-width: 680px)").addEventListener('change', updateM)

    return () => {
      window
        .removeEventListener("resize", updateWindowDimensions)
      window
        .matchMedia("(min-width: 680px)")
        .removeEventListener("change", updateM)
    } 
  }, [])
  
  return (
    <div className="App" style={{height: `${height}px`}}>
      <AnimatePresence exitBeforeEnter>  
        <Routes location={location} key={location.pathname}> 
          <Route path="/" element={<Layout hide={hide}/>}>
            <Route index element={<Intro m={m}/>}/>
            <Route path="about" element={<About m={m}/>}/>
            <Route path="offer" element={<Offer m={m} setHide={() => setHide(!hide)}/>}/>
            <Route path="projects" element={<Projects m={m}/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
