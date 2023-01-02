import "./ProjectCarouselStyling/ProjectCarouselMain.scss";
import { useState } from "react";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const ProjectCarousel = (props) => {
    const { projectArr } = props;
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        if (counter === projectArr.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(projectArr.length - 1);
        } else {
            setCounter(counter - 1);
        }
    };

    return (
        <div className='projectCarousel'>
            <img
                src={leftArrow}
                alt='left arrow'
                onClick={handleDecrement}
                className='projectCarousel__arrow projectCarousel__arrow--left'
            />
            <div className='projectCarousel__body'>{projectArr[counter]}</div>
            <img
                src={rightArrow}
                alt='right arrow'
                onClick={handleIncrement}
                className='projectCarousel__arrow projectCarousel__arrow--right'
            />
        </div>
    );
};

export default ProjectCarousel;
