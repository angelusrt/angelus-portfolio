import { ProjectDiv, TextDiv } from "../components/Blocks/Blocks"
import Data from "../Data.json"
import Icon from "../components/Icons/Icons"

function Projects() {
  return (
    <section id='projects'>
      <TextDiv title="Projetos"/>
      {
        Data.projects.map((item) => (
          <ProjectDiv
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
            imageAlt={item.imageAlt}
            url={item.url}
            urlImage={item.urlImage}
            urlTitle={item.urlTitle}
          />
        ))
      }
      <Icon 
        className="water-mark water-mark-left"
        name={Data.index[5].icon} 
      />
    </section>
  )
}

export default Projects