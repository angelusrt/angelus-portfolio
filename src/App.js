import { useEffect, useState, useRef } from 'react'
import { CSSTransition } from "react-transition-group"
import Icon from './svgs/svgs'
import Data from "./Data.json"
import './styles/App.css'
import './styles/blueTheme.css'
import './styles/lightTheme.css'
import './styles/orangeTheme.css'

//Page1
function Intro() {
  const[isLinkedIn, setIsLinkedIn] = useState(false)
  const[isGithub, setIsGithub] = useState(false)
  
  return (
    <section id='intro'>
      <div className="photo"/>
      <div className="photo-thin"/>
      <div className="header-div">
        <div className="title-div"/>
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </div> 
      <div className="socials-div">
        <CSSTransition
          classNames="button-anim"
          in={isLinkedIn}
          timeout={500}
        >
          <a 
            target="_blank" 
            href='https://www.linkedin.com/in/angelus-t-a7659b141/'
            rel="noreferrer"
            onTouchStart={() => setIsLinkedIn(true)}
            onTouchEnd={() => setIsLinkedIn(false)}
            onMouseOver={() => setIsLinkedIn(true)}
            onMouseLeave={() => setIsLinkedIn(false)}
          >
            <Icon name="LinkedIn" className="Icon"/>
            <h3>LinkedIn</h3>
          </a>
        </CSSTransition>
        <CSSTransition
          classNames="button-anim"
          in={isGithub}
          timeout={500}
        >
          <a 
            target="_blank" 
            href='https://github.com/angelusrt'
            rel="noreferrer"
            onTouchStart={() => setIsGithub(true)}
            onTouchEnd={() => setIsGithub(false)}
            onMouseOver={() => setIsGithub(true)}
            onMouseLeave={() => setIsGithub(false)}
          >
            <Icon name="Github" className="Icon"/>
            <h3>Github</h3>
          </a>
        </CSSTransition>
      </div>
    </section>
  )
}
//Page2
function About() {
  return (
    <section id='about'>
      <div className='title-div'/>
      <h1>Sobre mim</h1>
      <div className='content-div'>
        <p>
          Eu, como um desenvolvedor full-stack, tenho 
          competência para fazer aplicações que resolvem 
          problemas, além de interfaces bonitas e engajadoras. 
        </p>
        <div className='side-div'>
          <div className='info-div'>
            <h3>Telefone</h3>
            <h2>(81) 99564-0616</h2>
          </div>
          
          <div className='info-div'>
            <h3>Email</h3>
            <h2>angelusrt@gmail.com</h2>
          </div>
        </div>
      </div>
      <Icon name={Data.index[1].icon} className="water-mark water-mark-left"/>
    </section>
  )
}
//Page3
function Formation(){
  return(
    <section id='formation'>
      <div className='title-div'/>
      <h1>Formação</h1>
      <div className='course-div'>
        <div className='course'>
          <h3>Técnico</h3>
          <h1>Programação de Jogos</h1>
          <h4>Instituição</h4>
          <h2>ETE Cícero Dias</h2>
          <h4>Tempo</h4>
          <h2>01/2018 até 12/2020</h2>
        </div>
        <div className='course'>
          <h3>Acadêmico</h3>
          <h1>Ciência da computação</h1>
          <h4>Instituição</h4>
          <h2>UniFBV</h2>
          <h4>Tempo</h4>
          <h2>07/2021 até atualmente</h2>
        </div>
      </div>
      <Icon name={Data.index[2].icon} className="water-mark water-mark-right"/>
    </section>
  )
}
//Page4
function Goals(){
  return(
    <section id='goals'>
      <div className='title-div'/>
      <h1>Objetivos</h1>
      <div className='goal-div'>
        <p>
          Eu tenho como objetivo aumentar meu aprendizado 
          teórico e prático, além de me exigir em relação 
          a minha eficiência no trabalho.
        </p>
        <p>
          Eu procuro, também, ampliar a minha experiência 
          com o trabalho em equipe mantendo organização e 
          respeito. 
        </p>
      </div>
      <Icon name={Data.index[3].icon} className="water-mark water-mark-left"/>
    </section>
  )
}
//Page5
function Offer() {
  return (
    <section id='offer'>
      <div className='title-div'/>
      <h1>Posso Oferecer</h1>
      <div className='offer-div'>
        {Data.offer.map(i => (
          <div className='info-div' key={i.id}>
            <h3>{i.title}</h3>
            <h2>{i.subtitle}</h2>
          </div>
        ))}
      </div>
      <Icon name={Data.index[4].icon} className="water-mark water-mark-right"/>
    </section> 
  )
}
//Page6
function Projects() {
  return (
    <section id='projects'>
      <div className='title-div'/>
      <h1>Projetos</h1>
      {Data.projects.map((i) => (
        <ProjectsHelper
          key={i.id}
          id={i.id}
          title={i.title}
          subtitle={i.subtitle}
          body={i.body}
          imageURL={i.imageURL}
          imageAlt={i.imageAlt}
          URL={i.URL}
          URLTitle={i.URLTitle}
        />
      ))}
      <Icon name={Data.index[5].icon} className="water-mark water-mark-left"/>
    </section>
  )
}
//Page6Helper
function ProjectsHelper(props) {
  const[isImage, setIsImage] = useState(false)
  const[isButton, setIsButton] = useState(false)
  
  return (
    <article key={props.id}>
      <CSSTransition
        classNames="image-anim"
        in={isImage}
        timeout={500}
      >
        <div
          className='image'
          style={{
            backgroundImage: `url(${props.imageURL})`
          }}
          onTouchStart={() => setIsImage(true)}
          onTouchEnd={() => setIsImage(false)}
          onMouseOver={() => setIsImage(true)}
          onMouseLeave={() => setIsImage(false)}
        >
          <h3>{props.title}</h3>
          <h2>{props.subtitle}</h2>
          <p>{props.body}</p>
        </div>
      </CSSTransition>
      <div className='a-div'>
        <CSSTransition
          classNames="button-anim"
          in={isButton}
          timeout={500}
        >  
          <a 
            target="_blank" 
            href={props.URL}
            rel="noreferrer"
            onTouchStart={() => setIsButton(true)}
            onTouchEnd={() => setIsButton(false)}
            onMouseOver={() => setIsButton(true)}
            onMouseLeave={() => setIsButton(false)}
          >
            <h3>{props.URLTitle}</h3>
          </a>
        </CSSTransition>
      </div>
    </article>
  )
}

//Globals
const section = document.getElementsByTagName('section')

function App() {
  const[nav, setNav] = useState(["Introdução","Home"])
  const[tag, setTag] = useState("")
  const[theme, setTheme] = useState("theme-blue")
  const[isNavButton, setIsNavButton] = useState(false)
  const[isPop, setIsPop] = useState(false)
  const[isPopCanceled, setIsPopCanceled] = useState(true)
  
  const menuRef = useRef()
  const navRef= useRef()

  var timer

  //Funcões que atualizam o texto e icone do botão inferior
  const navHandler = () => {
    const scrollNormalized = window.scrollY + window.innerHeight - 100
    
    if( scrollNormalized < section.item(1).offsetTop) {
      setNav([Data.index[0].name, Data.index[0].icon])
    } else if( scrollNormalized < section.item(2).offsetTop) {
      setNav([Data.index[1].name, Data.index[1].icon])
    } else if( scrollNormalized < section.item(3).offsetTop) {
      setNav([Data.index[2].name, Data.index[2].icon])
    } else if( scrollNormalized < section.item(4).offsetTop) {
      setNav([Data.index[3].name, Data.index[3].icon])
    } else if( scrollNormalized < section.item(5).offsetTop) {
      setNav([Data.index[4].name, Data.index[4].icon])
    } else if( scrollNormalized > section.item(5).offsetTop) {
      setNav([Data.index[5].name, Data.index[5].icon])
    }
  }

  window.onscroll = () => {
    if(timer) window.clearTimeout(timer)
    timer = window.setTimeout(() => {navHandler()}, 100)
  }
  window.onresize = () => {
    if(timer) window.clearTimeout(timer)
    timer = window.setTimeout(() => {navHandler()}, 100)
  }

  useEffect(() => {
    if(isPop){
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
    }

    if(!isPop && !isPopCanceled)
      window.scroll({
        top: document.getElementById(tag).offsetTop, 
        left: 0, behavior: 'smooth'
      })
  },[isPop, isPopCanceled])

  useEffect(() => {
    switch (theme) {
      case "theme-light":
      case "theme-orange":
        document.body.className = "body-theme-light"
        break;
      case "theme-blue":
      default:
        document.body.className = "body-theme-blue"
        break;
    }
  },[theme])

  return (
    <main className={theme}>
      <CSSTransition
        classNames="side-menu-div"
        in={isPop}
        timeout={500}
        unmountOnExit
      >
        <div 
          className='side-menu-div' 
          onClick={ e => {
            if(
              e.clientX < menuRef.current.offsetLeft ||
              e.clientX > menuRef.current.offsetWidth + menuRef.current.offsetLeft ||
              e.clientY < menuRef.current.offsetTop ||
              e.clientY > menuRef.current.offsetHeight + menuRef.current.offsetTop
            ) {
              setIsPop(false)
              setIsPopCanceled(true)
            }
          }}
        >
          <div ref={menuRef} className='side-menu'>
            <div className='header-div'>
              <div className='title-div'/>
              <h1>Tópicos</h1>
              <button onClick={() => {
                setIsPop(false)
                setIsPopCanceled(true)  
              }}>
                <Icon name="Back" className="Icon"/>
                <h3>Voltar</h3>
              </button>
            </div> 
            <div className="index-div">
              {Data.index.map((i, k) => (
                <button 
                  className='index-button' 
                  key={k}
                  onClick={() => {
                    setIsPop(false)
                    setIsPopCanceled(false)
                    setTag(i.tag)
                  }}
                >
                  <p>{i.name}</p>
                  <Icon name={i.icon} className="Icon"/>
                </button>
              ))}
            </div>
            <Icon name="Line" className="line"/>
          </div>
        </div> 
      </CSSTransition>

      <Intro/>
      <About/>
      <Formation/>
      <Goals/>
      <Offer/>
      <Projects/>
      
      <nav ref={navRef} onClick={() => setIsPop(true)}>
        <CSSTransition
          classNames="nav-button-anim"
          in={isNavButton}
          timeout={500}
        >
          <button
            onTouchStart={() => setIsNavButton(true)}
            onTouchEnd={() => setIsNavButton(false)}
            onMouseOver={() => setIsNavButton(true)}
            onMouseLeave={() => setIsNavButton(false)}
          >
            <Icon name={nav[1]} className="Icon"/>
            <h3>{nav[0]}</h3>
          </button>
        </CSSTransition>
      </nav>
    </main>
  )
}

export default App
