import Icon from '../components/Icons/Icons'
import Data from "../Data.json"
import { Div, TextDiv, InfoDiv } from '../components/Blocks/Blocks'
import { Text } from '../components/Texts/Texts'

function About() {
  return (
    <section id='about'>
      <TextDiv title="Sobre mim"/>
      <Div className='block-two-column'>
        <Text 
          className="text-about-body block-column"
          type='p'
        >
          {Data.about.paragraph}
        </Text>
        <Div className='block-column'>
          <InfoDiv
            title={Data.about.infos[0].title}
            subtitle={Data.about.infos[0].subtitle}
          />
          <InfoDiv
            title={Data.about.infos[1].title}
            subtitle={Data.about.infos[1].subtitle}
          />
        </Div>
      </Div>
      <Icon 
        className="water-mark water-mark-left"
        name={Data.index[1].icon} 
      />
    </section>
  )
}

export default About