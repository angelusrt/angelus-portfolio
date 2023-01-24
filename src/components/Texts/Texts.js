import "./Texts.css"

function Text(props) {
  return (
    <props.type className={`${props.className} not-clickable`}>
      {props.children}
    </props.type>
  )
}

export {Text}