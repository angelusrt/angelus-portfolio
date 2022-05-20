import { useEffect, useState, useRef } from 'react'
import Icon from './svgs/svgs'
import Data from "./Data.json"
import './App.css'

//Page1
function Intro() {
  return (
    <div id='intro' className='intro page'>
      <div className="photo"/>
      <div className="header-div">
        <div className="title-div"/>
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </div> 
      <div className="socials-div">
        <a 
          target="_blank" 
          href='https://www.linkedin.com/in/angelus-t-a7659b141/'
          rel="noreferrer"
        >
          <Icon name="LinkedIn" className="Icon"/>
          <h3 className='text-1'>LinkedIn</h3>
        </a>
        <a 
          target="_blank" 
          href='https://github.com/angelusrt'
          rel="noreferrer"
        >
          <Icon name="Github" className="Icon"/>
          <h3 className='text-1'>Github</h3>
        </a>
      </div>
    </div>
  )
}
//Page2
function About() {
  return (
    <div id='about' className='about page'>
      <div className='title-div'/>
      <h1 className='title'>
        Sobre mim
      </h1>
      <section>
        <h2 className='body-text'>
          Eu, como um desenvolvedor full-stack, tenho 
          competência para fazer aplicações que resolvem 
          problemas, além de interfaces bonitas e engajadoras. 
        </h2>
        <div className='side-div'>
          <div className='info-div'>
            <h3 className='text-1'>Telefone</h3>
            <h2 className='text-2'>(81) 99564-0616</h2>
          </div>
          
          <div className='info-div'>
            <h3 className='text-1'>Email</h3>
            <h2 className='text-2'>angelusrt@gmail.com</h2>
          </div>
        </div>
      </section>
      <Icon name={Data.index[1].icon} className="water-mark water-mark-left"/>
    </div>
  )
}
//Page3
function Formation(){
  return(
    <div id='formation' className='formation page'>
      <div className='title-div'/>
      <h1 className='title'>Formação</h1>
      <div className='course-div'>
        <div className='course'>
          <h3 className='text-1'>Técnico</h3>
          <h1 className='text-3'>Programação de Jogos</h1>
          <h4 className='text-4'>Instituição</h4>
          <h2 className='text-2'>ETE Cícero Dias</h2>
          <h4 className='text-4'>Tempo</h4>
          <h2 className='text-2'>01/2018 até 12/2020</h2>
        </div>
        <div className='course'>
          <h3 className='text-1'>Acadêmico</h3>
          <h1 className='text-3'>Ciência da computação</h1>
          <h4 className='text-4'>Instituição</h4>
          <h2 className='text-2'>UniFBV</h2>
          <h4 className='text-4'>Tempo</h4>
          <h2 className='text-2'>07/2021 até atualmente</h2>
        </div>
      </div>
      <Icon name={Data.index[2].icon} className="water-mark water-mark-right"/>
    </div>
  )
}
//Page4
function Goals(){
  return(
    <div id='goals' className='goals page'>
      <div className='title-div'/>
      <h1 className='title'>Objetivos</h1>
      <div className='goal-div'>
        <h2 className='body-text'>
          Eu tenho como objetivo aumentar meu aprendizado 
          teórico e prático, além de me exigir em relação 
          a minha eficiência no trabalho.
        </h2>
        <h2 className='body-text'>
          Eu procuro, também, ampliar a minha experiência 
          com o trabalho em equipe mantendo organização e 
          respeito. 
        </h2>
      </div>
      <Icon name={Data.index[3].icon} className="water-mark water-mark-left"/>
    </div>
  )
}
//Page5
function Offer() {
  return (
    <div id='offer' className='offer page'>
      <div className='title-div'/>
      <h1 className='title'>Posso Oferecer</h1>
      <div className='offer-div'>
        {Data.offer.map(i => (
          <div className='info-div' key={i.id}>
            <h3 className='text-1'>{i.title}</h3>
            <h2 className='text-2'>{i.subtitle}</h2>
          </div>
        ))}
      </div>
      <Icon name={Data.index[4].icon} className="water-mark water-mark-right"/>
    </div> 
  )
}
//Page6
function Projects() {
  return (
    <div id='projects' className='projects page'>
      <div className='title-div'/>
      <h1 className='title'>Projetos</h1>
      {Data.projects.map((i) => (
        <div className='project-div' key={i.id}>
          <h3 className='text-1'>{i.title}</h3>
          <h2 className='text-3'>{i.subtitle}</h2>
        </div>
      ))}
      <Icon name={Data.index[5].icon} className="water-mark water-mark-left"/>
    </div>
  )
}

//Globals
const pageClass = document.getElementsByClassName('page')

function App() {
  const[nav, setNav] = useState(["Introdução","Home"])
  const[isPop, setIsPop] = useState(false)
  const[tag, setTag] = useState("")
  const[isPopCanceled, setIsPopCanceled] = useState(true)
  const[heightOnPop, setHeightOnPop] = useState(0)
  
  const menuRef = useRef()
  const navRef= useRef()

  var timer

  //Funcões que atualizam o texto e icone do botão inferior
  const navHandler = () => {
    const scrollNormalized = window.scrollY + window.innerHeight - 100
    
    if( scrollNormalized < pageClass.item(1).offsetTop) {
      setNav([Data.index[0].name, Data.index[0].icon])
    } else if( scrollNormalized < pageClass.item(2).offsetTop) {
      setNav([Data.index[1].name, Data.index[1].icon])
    } else if( scrollNormalized < pageClass.item(3).offsetTop) {
      setNav([Data.index[2].name, Data.index[2].icon])
    } else if( scrollNormalized < pageClass.item(4).offsetTop) {
      setNav([Data.index[3].name, Data.index[3].icon])
    } else if( scrollNormalized < pageClass.item(5).offsetTop) {
      setNav([Data.index[4].name, Data.index[4].icon])
    } else if( scrollNormalized > pageClass.item(5).offsetTop) {
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
    if(
      menuRef.current.parentElement.className === "side-menu-div-deactivated" 
      && isPopCanceled
    ) {
      window.scroll({top: heightOnPop, left: 0, behavior: 'auto'})
    } else if(
      menuRef.current.parentElement.className === "side-menu-div-deactivated"
      ) {
        const e = document.getElementById(tag)
        window.scroll({top: heightOnPop, left: 0, behavior: 'auto'})
        window.scroll({top: e.offsetTop, left: 0, behavior: 'smooth'})
    }
  },[isPop, heightOnPop, isPopCanceled, tag])

  return (
    <div className="App">
      <div 
        className={isPop ? 'side-menu-div': "side-menu-div-deactivated"} 
        onClick={ e => {
          if(
            e.pageX < menuRef.current.offsetLeft ||
            e.pageX > menuRef.current.offsetWidth + menuRef.current.offsetLeft ||
            e.pageY < menuRef.current.offsetTop ||
            e.pageY > menuRef.current.offsetHeight + menuRef.current.offsetTop
          ) {
            setIsPop(!isPop)
            setIsPopCanceled(true)
          }
        }}
      >
        <div ref={menuRef} className='side-menu'>
          <div className='title-div'/>
          <h1 className='title'>Tópicos</h1>
          {Data.index.map((i, k) => (
            <button 
              //href={i.tag} 
              className='index-div' 
              key={k}
              onClick={() => {
                setIsPop(!isPop)
                setIsPopCanceled(false)
                setTag(i.tag)
              }}
            >
              <h2 className='body-text'>{i.name}</h2>
              <Icon name={i.icon} className="Icon"/>
            </button>
          ))}
        </div>
      </div> 
      <div className={isPop ? "body-div-deactivated" : "body-div"}>
        <Intro/>
        <About/>
        <Formation/>
        <Goals/>
        <Offer/>
        <Projects/>
        
        <nav ref={navRef} className='nav' onClick={()=> {
          setIsPop(!isPop)
          setHeightOnPop(window.scrollY)
        }}>
          <button>
            <Icon name={nav[1]} className="Icon"/>
            <h3 className='text-1'>{nav[0]}</h3>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default App
