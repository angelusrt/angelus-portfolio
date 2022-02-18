import react, { useEffect, useState } from 'react'
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"
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

function Page1(props) {
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
        animate={{opacity: 1, x: props.m?"-50%":"0"}}
      >
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </motion.div> 
    </div>
  )
}

function Page2(props) {
  return (
    <div className='about-container'>
      <motion.div 
        className="profile"
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: 0, x: props.m?"-50%":"0", y: "-10vh"}}
        animate={{opacity: 1, y: "0", x: props.m?"-50%":"0"}}
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
            variants={props.m?aboutItemRigth:item}
          >
            <h3>Telefone</h3>
            <h2>(81) 99564-0616</h2>
          </motion.div>
          
          <motion.div
            transition={{type: "spring", stiffness: 50}}
            variants={props.m?aboutItemRigth:item}
          >
            <h3>Email</h3>
            <h2>angelusrt@gmail.com</h2>
          </motion.div>
        </aside>
      </motion.div>
    </div>
  )
}

function Page3(props) {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <react.Fragment>
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
          {/* <Link to="sites" > */}
            <motion.button
              layout
              layoutId='site'
              onClick={() => setSelectedId("site")}
              transition={{type: "spring", stiffness: 50}}
              variants={item}
            >
              <h3>Sites Dinâmicos</h3>
              <h2>React.js</h2>
            </motion.button>
          {/* </Link> */}
        <motion.button
          transition={{type: "spring", stiffness: 50}}
          variants={item}
        >
          <h3>Layouts UI/UX engajadores</h3>
          <h2>Figma e Affinity Designer</h2>
        </motion.button>
        <motion.button
          transition={{type: "spring", stiffness: 50}}
          variants={item}
        >
          <h3>Servidores e banco de dados</h3>
          <h2>Node.js, express.js e mongoDB</h2>
        </motion.button>
        <motion.button
          transition={{type: "spring", stiffness: 50}}
          variants={item}
        >
          <h3>Apps responsivos</h3>
          <h2>React Native e Expo</h2>
        </motion.button>
      </motion.section>
    </div>
    <AnimatePresence initial={false} >
      {selectedId && <Page3_1 onClick={() => setSelectedId(null)}/>}
    </AnimatePresence>
    </react.Fragment>
  )
}

function Page4(props) {
  return (
    <div className='projects'>
      <motion.div 
        className='title'
        transition={{type: "spring", stiffness: 50}}
        initial={{opacity: 0, x: props.m?"-50%":"0", y: "-5vh"}}
        animate={{opacity: 1, y: "0", x: props.m?"-50%":"0"}}
      >
        <h1>Projetos</h1>
      </motion.div>
      <motion.section
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          transition={{type: "spring", stiffness: 50}}
          variants={item}
        >
          <h2>Lorem Ipsum</h2>
        </motion.div>
        <motion.div
          transition={{type: "spring", stiffness: 50}}
          variants={item}
        >
          <h2>Lorem Ipsum</h2>
        </motion.div>
      </motion.section>
    </div>
  )
}

function Page3_1(props) {
  return(
    <motion.div
      layout
      layoutId='site' 
      className='sites'
      onClick={props.onClick}
      initial={{opacity: 1}}
      animate={{opacity: 1}}
    >
      <div className='banner'/>
      <motion.div 
        className='title'
      >
        <h3>Sites Dinâmicos</h3>
        <h2>React.js</h2>
      </motion.div>
      <section>
        <p>
          Reprehenderit anim ullamco dolor fugiat in 
          duis irure ullamco laboris dolor cillum quis anim. 
          Id proident non esse enim non cillum ullamco eu 
          voluptate ut ullamco esse qui ullamco.
        </p>
      </section>
    </motion.div>
  )
}

function App() {
  const [height, setHeight] = useState(window.innerHeight)
  const [m, setM] = useState(window.matchMedia("(min-width: 680px)").matches)
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
          <Route path="/" element={<Layout/>}>
            <Route index element={<Page1 m={m}/>}/>
            <Route path="about" element={<Page2 m={m}/>}/>
            <Route path="offer" element={<Page3 m={m}/>}>
              <Route path="sites" element={<Page3_1 m={m}/>}/>
            </Route>
            <Route path="projects" element={<Page4 m={m}/>}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
