import { Link } from '../components/Buttons/Buttons'
import { Text } from '../components/Texts/Texts'
import { Div, TextDiv } from "../components/Blocks/Blocks"
import Data from '../Data.json'

function Intro() {
  return (
    <section id='intro'>
      <Div className="block-visual"/>
      <Div className="block-visual-alt"/>
      <Div className="block-intro">
        <TextDiv 
          className="text-intro-title" 
          title={Data.intro.title}
        />
        <Text 
          className="text-intro-subtitle" 
          type='h2'
        >
          {Data.intro.subtitle}
        </Text>
      </Div> 
      <Div className="block-social">
        <Link
          isIcon={true}
          className="button-social" 
          name="LinkedIn"
          href='https://www.linkedin.com/in/angelus-t-a7659b141/'
        />
        <Link
          isIcon={true}
          className="button-social"
          name="Github"
          href="https://github.com/angelusrt"
        />
      </Div>
    </section>
  )
}

export default Intro