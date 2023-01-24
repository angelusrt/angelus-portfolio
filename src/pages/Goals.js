import Icon from '../components/Icons/Icons'
import Data from "../Data.json"
import { Text } from '../components/Texts/Texts'
import { Div, TextDiv } from "../components/Blocks/Blocks"
function Goals(){
  return(
    <section id='goals'>
      <TextDiv title="Objetivos"/>
      <Div className='block-two-column'>
        <Text  
          className="text-goal-body block-column" 
          type='p'
        >
          {Data.goals[0]}
        </Text>
        <Text  
          className="text-goal-body block-column" 
          type='p'
        >
          {Data.goals[1]}
        </Text> 
      </Div>
      <Icon 
        className="water-mark water-mark-left"
        name={Data.index[3].icon} 
      />
    </section>
  )
}

export default Goals