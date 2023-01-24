import { useEffect, useState, useRef } from 'react'
import { CSSTransition } from "react-transition-group"
import { Button } from '../Buttons/Buttons'
import { TextDiv } from '../Blocks/Blocks'
import Icon from '../Icons/Icons'
import Data from "../../Data.json"

import "./Nav.css"

const section = document.getElementsByTagName('section')

function Nav(props) {
  const[buttonInfo, setButtonInfo] = useState({name:"Introdução", icon: "Home"})

  var timer
  
  const changeButtonInfoOnScrollPosition = () => {
    const scrollPosition = window.scrollY + window.innerHeight - 100
    
    const indexPosition = (i) => section.item(i).offsetTop 
    const indexName = (i) => Data.index[i].name
    const indexIcon = (i) => Data.index[i].icon
    
    for (let i = section.length - 1; i >= 0; i--) {
      if(scrollPosition > indexPosition(i)){
        setButtonInfo({name: indexName(i), icon: indexIcon(i)})
        break
      }
    }
  }

  const setFunctionTimeout = () => {
    if(timer) window.clearTimeout(timer)
  
    timer = window.setTimeout(() => {
      changeButtonInfoOnScrollPosition()
    }, 100)
  }

  window.onscroll = setFunctionTimeout
  window.onresize = setFunctionTimeout

  return(
    <nav onClick={props.setModal}>
      <Button 
        type='h3'
        className='button-nav'
        name={buttonInfo.name}
        icon={buttonInfo.icon} 
      />
    </nav>
  )
}

function NavModal(props) {
  const[isModalCanceled, setModalCanceled] = useState(true)
  const[tag, setTag] = useState("")

  const modalRef = useRef()

  const exitModalIfOutside = (e) => {
    const modal = modalRef.current
    
    const isLeftOut = e.clientX < modal.offsetLeft 
    const isRightOut = e.clientX > modal.offsetWidth + modal.offsetLeft
    const isTopOut = e.clientY < modal.offsetTop
    const isBottomOut = e.clientY > modal.offsetHeight + modal.offsetTop 
    
    if(isLeftOut || isRightOut || isTopOut || isBottomOut) {
      props.setModal(false)
      setModalCanceled(true)
    }
  } 

  useEffect(() => {
    if(props.isModal){
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
    }

    if(!props.isModal && !isModalCanceled) { 
      window.scroll({
        top: document.getElementById(tag).offsetTop, 
        left: 0, 
        behavior: 'smooth'
      })
    }
  },[props.isModal, isModalCanceled, tag])
  
  return(
    <CSSTransition
      classNames="modal-wrapper"
      in={props.isModal}
      timeout={500}
      unmountOnExit
    >
      <div 
        className='modal-wrapper not-clickable' 
        onClick={exitModalIfOutside}
      >
        <div ref={modalRef} className='modal not-clickable'>
          <div className='modal-header not-clickable'>
            <TextDiv textDiv="Tópicos"/>
            <Button
              type="h3"
              icon="Back"
              name="Voltar"
              className="button-modal-header"
              onFunction={() => {
                props.setModal(false)
                setModalCanceled(true)  
              }}
            />
            <Button
              type="h3"
              icon="Star"
              name="Mudar tema"
              className="button-modal-header"
              onFunction={props.setThemeIndex}
            />
          </div> 
          <div className="modal-index not-clickable">
            {Data.index.map((item, index) => (
              <Button
                className="button-modal-index"
                type="p"
                key={index}
                name={item.name}
                icon={item.icon}
                onFunction={() => {
                  props.setModal(false)
                  setModalCanceled(false)
                  setTag(item.tag)    
                }}
              />
            ))}
          </div>
          <Icon 
            className="line not-clickable"
            name="Line" 
          />
        </div>
      </div> 
    </CSSTransition>
  )
}

export { Nav, NavModal }