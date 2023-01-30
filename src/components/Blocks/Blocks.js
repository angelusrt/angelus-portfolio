import { useAnimateOnScroll, transition } from "../../functions/utils"
import { Text } from "../Texts/Texts"
import { Link } from '../Buttons/Buttons'
import "./Blocks.css"

const blockColumnTransition = {
  ...transition, isDelayChild: false, start: 1000
}
const blockInfoTransition = {
  ...transition, isDelayChild: false, start: 200
}
const blockSocialTransition = {
  ...transition, isDelayChild: true, start: 600
}


function Div(props) {
  useAnimateOnScroll('.block-text-div')
  useAnimateOnScroll('.block-column')
  useAnimateOnScroll('.block-column .block-info', blockColumnTransition)
  useAnimateOnScroll('.block-grid .block-info', blockInfoTransition)
  useAnimateOnScroll('.block-social', blockSocialTransition)

  return(
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  )
}

function TextDiv(props) {
  return(
    <Div className="block-text">
      <Div className="block-text-div"/>
      <Text 
        className={`${props.className} text-block-title`}
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
  useAnimateOnScroll('.block-project')

  return (
    <article key={props.id} className="block-project">
      <Div className='block-project-content'>
        <Text 
          className="text-project-title" 
          type='h3'
        >
          {props.title}
        </Text>
        <Text 
          className="text-project-subtitle" 
          type='h2'
        >
          {props.subtitle}
        </Text>
        <Text 
          className="text-project-body" 
          type='p'
        >
          {props.body}
        </Text>
        <Link
          isIcon={false}
          className="button-link"
          href={props.url}
          name={props.urlTitle}
        />
      </Div>
      <Div
        className='block-image not-clickable'
        style={{
          backgroundImage: `url(${props.urlImage})`
        }}
      />
    </article>
  )
}

export {Div, TextDiv, InfoDiv, CourseDiv, CursorDiv, ProjectDiv}