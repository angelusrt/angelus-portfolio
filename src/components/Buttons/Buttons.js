import { Text } from "../Texts/Texts"
import Icon from "../Icons/Icons"

import "./Buttons.css"
import { useAnimateOnScroll, transition } from "../../functions/utils"

const buttonModalTransition = {
  ...transition, isDelayChild: false, start: 200
}
function Button(props){
  useAnimateOnScroll('.button-modal-index', buttonModalTransition)

  return(
    <button 
      className={`${props.className} not-clickable`}
      onClick={props.onFunction}
      {...props.funcs}
    >
      <Icon name={props.icon} className="Icon not-clickable"/> 
      <Text type={props.type}>{props.name}</Text>
    </button>
  )
}

function Link(props) {
  return(
    <a 
      className={`${props.className} not-clickable`}
      target="_blank" 
      href={props.href}
      rel="noreferrer"
    >
      {
        props.isIcon &&
        <Icon 
          className="Icon not-clickable"
          name={props.name} 
        /> 
      }
      <Text type='h3'>{props.name}</Text>
    </a>
  )
}

export {Button, Link}