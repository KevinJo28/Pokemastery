import { Carousel } from 'nuka-carousel';
import AcordionImg from './AcordionImg';
import AcordionImg2 from './AcordionImg2';

export default function Slider() {
  return (
    <div className='slider-container'>
      <Carousel  scrollDistance={2000} autoplay={false} autoplayInterval={6000}  wrapMode="wrap">
        <AcordionImg/>
        <AcordionImg2/>
        <img src="/src/images/slider3.png" alt="a"  className='slide'/>
        <img src="/src/images/slider3.png" alt="a"  className='slide'/>
      </Carousel>
    </div>
  );
};