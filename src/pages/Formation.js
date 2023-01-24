import Icon from '../components/Icons/Icons'
import Data from "../Data.json"
import { Div, TextDiv, CourseDiv } from '../components/Blocks/Blocks'

function Formation(){
  return(
    <section id='formation'>
      <TextDiv title="Formação"/>
      <Div className='block-two-column'>
        <CourseDiv 
          title={Data.formation[0].title}
          subtitle={Data.formation[0].subtitle}
          institution={Data.formation[0].institution}
          period={Data.formation[0].period}
        />
        <CourseDiv
          title={Data.formation[1].title}
          subtitle={Data.formation[1].subtitle}
          institution={Data.formation[1].institution}
          period={Data.formation[1].period}
        />
      </Div>
      <Icon 
        className="water-mark water-mark-right"
        name={Data.index[2].icon} 
      />
    </section>
  )
}

export default Formation