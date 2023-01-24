import Icon from '../components/Icons/Icons'
import Data from "../Data.json"
import { Div, TextDiv, InfoDiv } from '../components/Blocks/Blocks'

function Offer() {
  return (
    <section id='offer'>
      <TextDiv title="Posso Oferecer"/>
      <Div className='block-grid not-clickable'>
        {Data.offer.map(item => (
          <InfoDiv
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Div>
      <Icon 
        className="water-mark water-mark-right"
        name={Data.index[4].icon} 
      />
    </section> 
  )
}

export default Offer