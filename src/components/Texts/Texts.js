import { useAnimateOnScroll } from "../../functions/utils"
import "./Texts.css"

function Text(props) {
  useAnimateOnScroll('.text-block-title')
  useAnimateOnScroll('.text-intro-subtitle')

  return (
    <props.type className={`${props.className} not-clickable`}>
      {props.children}
    </props.type>
  )
}

export {Text}