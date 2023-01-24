import { useEffect, useState} from 'react'

import About from './pages/About'
import Formation from './pages/Formation'
import Goals from './pages/Goals'
import Intro from './pages/Intro'
import Offer from './pages/Offer'
import Projects from './pages/Projects'

import {Nav, NavModal} from './components/Nav/Nav'
import { CursorDiv } from './components/Blocks/Blocks'

//Globals
const themes = ["theme-blue", "theme-light", "theme-orange"]

const getColor = (prop) => (
  getComputedStyle(document.body)
  .getPropertyValue(prop)
) 

const transparentBaseColors = [
  getColor('--transparent-darker-blue'),
  getColor('--transparent-white'),
  getColor('--transparent-black') 
]
const baseColors = [
  getColor('--darker-blue'),
  getColor('--white'),
  getColor('--white') 
]

function App() {
  const[themeIndex, setThemeIndex] = useState(0)
  const[isModal, setModal] = useState(false)

  const changeThemeOnMouseDown = (e) => {
    const main = document.querySelector('main')
    const isLeftButton = e.button === 0
    const isClickable = !e.target.classList.contains("not-clickable")
    const isNotMobile = window.innerWidth >= 1020
    
    let isNotHoveredOnNotClickable = true 
  
    if(isClickable && isNotMobile && isLeftButton){
      const abortIfHoveredOnNotClickable = (e) => {
        const isClickable = !e.target.classList.contains("not-clickable")
        
        if(!isClickable) isNotHoveredOnNotClickable = false
      }

      const changeIfNotHoveredOnNotClickable = () => {
        if(isNotHoveredOnNotClickable)
          setThemeIndex(state => state === 2 ? 0 : ++state)
  
        main.onmousemove = null
        main.onmouseup = null
      }

      main.onmousemove = abortIfHoveredOnNotClickable
      main.onmouseup = changeIfNotHoveredOnNotClickable
    }
  }

  useEffect(() => {
    const main = document.querySelector('main')
    const body = document.body

    main.style.setProperty(
      '--transparent-base', transparentBaseColors[themeIndex]
    )
    body.setAttribute('style', `background-color: ${baseColors[themeIndex]}`)
  },[themeIndex])

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursorParagraph = document.querySelector('.cursor p')

    const changeCursorOnMove = (e) => {
      const isNotMobile = window.innerWidth >= 1020
      const isClickable = !e.target.classList.contains("not-clickable")
      
      if(isNotMobile){
        //Change cursorParagraph on "not-clickable"
        isClickable ?
        cursorParagraph.setAttribute(
          "style", `display: block;`
        ): 
        cursorParagraph.setAttribute(
          "style", `display: none;`
        )

        cursor.setAttribute(
          "style", 
          `top: ${e.pageY - 30}px; 
            left: ${e.pageX - 30}px;`
        )
      }
    }

    const animateCursorOnClick = () => {
      const isNotMobile = window.innerWidth >= 1020

      if(isNotMobile){
        cursor.classList.add("cursor-expand")
            
        setTimeout(() => {
          cursor.classList.remove("cursor-expand")
        }, 500)
      }
    }

    document.addEventListener('mousemove', changeCursorOnMove)
    document.addEventListener('click', animateCursorOnClick)         
  },[])
  
  return (
    <main 
      id="main"
      className={themes[themeIndex]}
      onMouseDown={changeThemeOnMouseDown}
    >
      <CursorDiv/>
      <NavModal 
        isModal={isModal} 
        setModal={(state) => setModal(state)}
        setThemeIndex={() => 
          setThemeIndex(state => state === 2 ? 0 : ++state)
        }
      />
      <Nav setModal={() => setModal(true)}/>
      <Intro/>
      <About/>
      <Formation/>
      <Goals/>
      <Offer/>
      <Projects/>
    </main>
  )
}

export default App
