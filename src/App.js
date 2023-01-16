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
        <h1 className='not-clickable'>Angelus</h1>
        <h2 className='not-clickable'>Programador e designer.</h2>
      </div> 
      <div className="socials-div">
        <CSSTransition
          classNames="button-anim"
          in={isLinkedIn}
          timeout={500}
        >
          <a
            className='not-clickable'
            target="_blank" 
            href='https://www.linkedin.com/in/angelus-t-a7659b141/'
            rel="noreferrer"
            onTouchStart={() => setIsLinkedIn(true)}
            onTouchEnd={() => setIsLinkedIn(false)}
            onMouseOver={() => setIsLinkedIn(true)}
            onMouseLeave={() => setIsLinkedIn(false)}
          >
            <Icon name="LinkedIn" className="Icon not-clickable"/>
            <h3 className='not-clickable'>LinkedIn</h3>
          </a>
        </CSSTransition>
        <CSSTransition
          classNames="button-anim"
          in={isGithub}
          timeout={500}
        >
          <a 
            className='not-clickable'
            target="_blank" 
            href='https://github.com/angelusrt'
            rel="noreferrer"
            onTouchStart={() => setIsGithub(true)}
            onTouchEnd={() => setIsGithub(false)}
            onMouseOver={() => setIsGithub(true)}
            onMouseLeave={() => setIsGithub(false)}
          >
            <Icon name="Github" className="Icon not-clickable"/>
            <h3 className='not-clickable'>Github</h3>
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
      <h1 className='not-clickable'>Sobre mim</h1>
      <div className='content-div'>
        <p className='not-clickable'>
          Eu, como um desenvolvedor full-stack, tenho 
          competência para fazer aplicações que resolvem 
          problemas, além de interfaces bonitas e engajadoras. 
        </p>
        <div className='side-div'>
          <div className='info-div not-clickable'>
            <h3 className='not-clickable'>Telefone</h3>
            <h2 className='not-clickable'>(81) 99564-0616</h2>
          </div>
          
          <div className='info-div not-clickable'>
            <h3 className='not-clickable'>Email</h3>
            <h2 className='not-clickable'>angelusrt@gmail.com</h2>
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
      <h1 className='not-clickable'>Formação</h1>
      <div className='course-div'>
        <div className='course'>
          <h3 className='not-clickable'>Técnico</h3>
          <h1 className='not-clickable'>Programação de Jogos</h1>
          <h4 className='not-clickable'>Instituição</h4>
          <h2 className='not-clickable'>ETE Cícero Dias</h2>
          <h4 className='not-clickable'>Tempo</h4>
          <h2 className='not-clickable'>01/2018 até 12/2020</h2>
        </div>
        <div className='course'>
          <h3 className='not-clickable'>Acadêmico</h3>
          <h1 className='not-clickable'>Ciência da Computação</h1>
          <h4 className='not-clickable'>Instituição</h4>
          <h2 className='not-clickable'>UniFBV</h2>
          <h4 className='not-clickable'>Tempo</h4>
          <h2 className='not-clickable'>07/2021 até atualmente</h2>
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
      <h1 className='not-clickable'>Objetivos</h1>
      <div className='goal-div'>
        <p className='not-clickable'>
          Eu tenho como objetivo aumentar meu aprendizado 
          teórico e prático, além de me exigir em relação 
          a minha eficiência no trabalho.
        </p>
        <p className='not-clickable'>
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
      <h1 className='not-clickable'>Posso Oferecer</h1>
      <div className='offer-div not-clickable'>
        {Data.offer.map(i => (
          <div className='info-div' key={i.id}>
            <h3 className='not-clickable'>{i.title}</h3>
            <h2 className='not-clickable'>{i.subtitle}</h2>
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
      <h1 className='not-clickable'>Projetos</h1>
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
          className='image not-clickable'
          style={{
            backgroundImage: `url(${props.imageURL})`
          }}
          onTouchStart={() => setIsImage(true)}
          onTouchEnd={() => setIsImage(false)}
          onMouseOver={() => setIsImage(true)}
          onMouseLeave={() => setIsImage(false)}
        >
          <h3 className='not-clickable'>{props.title}</h3>
          <h2 className='not-clickable'>{props.subtitle}</h2>
          <p className='not-clickable'>{props.body}</p>
        </div>
      </CSSTransition>
      <div className='a-div not-clickable'>
        <CSSTransition
          classNames="button-anim"
          in={isButton}
          timeout={500}
        >  
          <a 
            className='not-clickable'
            target="_blank" 
            href={props.URL}
            rel="noreferrer"
            onTouchStart={() => setIsButton(true)}
            onTouchEnd={() => setIsButton(false)}
            onMouseOver={() => setIsButton(true)}
            onMouseLeave={() => setIsButton(false)}
          >
            <h3 className='not-clickable'>{props.URLTitle}</h3>
          </a>
        </CSSTransition>
      </div>
    </article>
  )
}

//Globals
const themes = ["theme-blue", "theme-light", "theme-orange"]
const section = document.getElementsByTagName('section')
// const state = {changeThemeStatus: "off"}

function App() {
  const[nav, setNav] = useState(["Introdução","Home"])
  const[tag, setTag] = useState("")
  const[themeIndex, setThemeIndex] = useState(0)
  // const[changeThemeStatus, setChangeThemeStatus] = useState("off")
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
  },[isPop, isPopCanceled, tag])

  useEffect(() => {
    if(themes[themeIndex] === "theme-blue")
      document.body.className = "body-theme-blue"
    else
      document.body.className = "body-theme-light"
  },[themeIndex])

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursorParagraph = document.querySelector('.cursor p')

    document.addEventListener('mousemove', e => {
      const isNotMobile = window.innerWidth >= 1020
      const isClickable = !e.target.classList.contains("not-clickable")
      
      if(isClickable){
        cursorParagraph.setAttribute(
          "style",
          `display: block;`
        )
      } else{
        cursorParagraph.setAttribute(
          "style",
          `display: none;`
        )
      }
      if(isNotMobile)
        cursor.setAttribute(
          "style", 
          `top: ${e.pageY - 30}px; 
           left: ${e.pageX - 30}px;`
        )
    })
  
    document.addEventListener('click', () => {
      const isNotMobile = window.innerWidth >= 1020

      if(isNotMobile){
        cursor.classList.add("expand");
            
        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500)
      }
    })         
  },[])
  
  return (
    <main 
      id="main"
      className={themes[themeIndex]}
      onMouseDown={e => {
        const main = document.querySelector('main')
        const isLeftButton = e.button === 0
        const isClickable = !e.target.classList.contains("not-clickable")
        const isNotMobile = window.innerWidth >= 1020
        
        let isNotHoveredOnNotClickable = true 
      
        if(isClickable && isNotMobile && isLeftButton){
          main.onmousemove = e => {
            const isClickable = !e.target.classList.contains("not-clickable")
            
            if(!isClickable) isNotHoveredOnNotClickable = false
          }
          main.onmouseup = () => {
            if(isNotHoveredOnNotClickable)
              setThemeIndex(state => state === 2 ? 0 : ++state)
  
            main.onmousemove = null
            main.onmouseup = null
          }
        }
      }}
    >
      <div className='cursor'>
        <p>
          Mudar  tema
        </p>
      </div>
      <CSSTransition
        classNames="side-menu-div"
        in={isPop}
        timeout={500}
        unmountOnExit
      >
        <div 
          className='side-menu-div not-clickable' 
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
          <div ref={menuRef} className='side-menu not-clickable'>
            <div className='header-div not-clickable'>
              <div className='title-div not-clickable'/>
              <h1 className='not-clickable'>Tópicos</h1>
              <button 
                className='not-clickable'
                onClick={() => {
                  setIsPop(false)
                  setIsPopCanceled(true)  
                }}
              >
                <Icon name="Back" className="Icon not-clickable"/>
                <h3 className='not-clickable'>Voltar</h3>
              </button>
              <button 
                className='not-clickable'
                onClick={() => {
                  setThemeIndex(state => state === 2 ? 0 : ++state)    
                }}
              >
                <Icon name="Star" className="Icon not-clickable"/>
                <h3 className='not-clickable'>Mudar tema</h3>
              </button>
            </div> 
            <div className="index-div not-clickable">
              {Data.index.map((i, k) => (
                <button 
                  className='index-button not-clickable' 
                  key={k}
                  onClick={() => {
                    setIsPop(false)
                    setIsPopCanceled(false)
                    setTag(i.tag)
                  }}
                >
                  <p className='not-clickable'>{i.name}</p>
                  <Icon name={i.icon} className="Icon not-clickable"/>
                </button>
              ))}
            </div>
            <Icon name="Line" className="line not-clickable"/>
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
            className='not-clickable'
            onTouchStart={() => setIsNavButton(true)}
            onTouchEnd={() => setIsNavButton(false)}
            onMouseOver={() => setIsNavButton(true)}
            onMouseLeave={() => setIsNavButton(false)}
          >
            <Icon name={nav[1]} className="Icon not-clickable"/>
            <h3 className='not-clickable'>{nav[0]}</h3>
          </button>
        </CSSTransition>
      </nav>
      {/* <div 
        className='background'
        // onClick={() => {
        //   setThemeIndex(state => state === 2 ? 0 : ++state)    
        // }}
        /> */}
    </main>
  )
}

export default App
