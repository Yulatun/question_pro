import {GreenArrow} from './icons/greenarrow'
import{RedArrow} from './icons/redarrow';

function DirectionScale() {
  return (
    <div className='direction-scale-container-mb'>
      <div className='text-direction-scale-left-mb'>ACTIVE NEGATIVE</div>
      <RedArrow />
      <div className='text-direction-scale-mb'>NEUTRAL</div>
      <GreenArrow />
      <div className='text-direction-scale-right-mb'>ACTIVE POSITIVE</div>
    </div>
  );

}

export default DirectionScale;
