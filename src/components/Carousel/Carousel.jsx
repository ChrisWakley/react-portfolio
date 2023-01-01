import "./CarouselStyling/CarouselMain.scss";
import { useState } from "react";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = (props) => {
    const { imageArr } = props;
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        if (counter === imageArr.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(imageArr.length - 1);
        } else {
            setCounter(counter - 1);
        }
    };

    return (
        <div className='carousel'>
            <img
                src={leftArrow}
                alt='left arrow'
                onClick={handleDecrement}
                className='carousel__arrow carousel__arrow--left'
            />
            <img src={imageArr[counter]} alt='' className='carousel__image' />
            <img
                src={rightArrow}
                alt='right arrow'
                onClick={handleIncrement}
                className='carousel__arrow carousel__arrow--right'
            />
        </div>
    );
};

export default Carousel;
