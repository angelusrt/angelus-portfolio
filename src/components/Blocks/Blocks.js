import { Text } from "../Texts/Texts"
import { Link } from '../Buttons/Buttons'
import "./Blocks.css"

function Div(props) {
  return(
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  )
}

function ImageDiv(props) {
  return(
    <Div
      className='block-image not-clickable'
      style={{
        backgroundImage: `url(${props.urlImage})`
      }}
    >
      <Text 
        className="text-image-title" 
        type='h3'
      >
        {props.title}
      </Text>
      <Text 
        className="text-image-subtitle" 
        type='h2'
      >
        {props.subtitle}
      </Text>
      <Text 
        className="text-image-body" 
        type='p'
      >
        {props.body}
      </Text>
    </Div>
  )
}

function TextDiv(props) {
  return(
    <Div className="block-text">
      <div className="block-text-div"/>
      <Text 
        className={props.className}
        type='h1'
      >
        {props.title}
      </Text>
    </Div>
  )
}

function InfoDiv(props) {
  return(
    <Div className='block-info not-clickable'>
      <Text 
        className="text-info-title" 
        type='h3'
      >
        {props.title}
      </Text>
      <Text 
        className="text-info-subtitle" 
        type='h2'
      >
        {props.subtitle}
      </Text>
    </Div>
  )
}

function CourseDiv(props) {
  return(
    <Div className='block-column'>
      <Text 
        className="text-course-subtitle" 
        type='h3'
      >
        {props.subtitle}
      </Text>
      <Text 
        className="text-course-title" 
        type='h1'
      >
        {props.title}
      </Text>
      <Text type='h4'>Instituição</Text>
      <Text 
        className="text-course-info" 
        type='h2'
      >
        {props.institution}
      </Text>
      <Text type='h4'>Tempo</Text>
      <Text 
        className="text-course-info" 
        type='h2'
      >
        {props.period}
      </Text>
    </Div> 
  )
}

function CursorDiv(){
  return(
    <div className='cursor'>
      <Text className="text-cursor" type='p'>Mudar tema</Text>
    </div>
  )
}

function ProjectDiv(props) {
  return (
    <article key={props.id} className="block-project">
      <ImageDiv
        title={props.title}
        subtitle={props.subtitle}
        body={props.body}
        urlImage={props.urlImage}
      />
      <Div className='block-project-button not-clickable'>
        <Link
          isIcon={false}
          className="button-link"
          href={props.url}
          name={props.urlTitle}
        />
      </Div>
    </article>
  )
}

export {Div, TextDiv, InfoDiv, CourseDiv, CursorDiv, ProjectDiv}