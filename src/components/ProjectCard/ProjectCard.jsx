import "./ProjectCardStyling/ProjectCardMain.scss";
import React, { useState } from "react";
import Button from "../Button/Button";
import WhiteCross from "../../assets/images/white-cross.png";
import Carousel from "../Carousel/Carousel";

const ProjectCard = ({
    name,
    image_url1,
    image_url2,
    image_url3,
    link,
    language,
    description,
}) => {
    const [showMore, setShowMore] = useState(true);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    const projectImages = [image_url1, image_url2, image_url3];

    const cardFaceJSX = (
        <div className='card__content card__content--face'>
            <div className='card__imageContainer'>
                <Carousel imageArr={projectImages} />
            </div>
            <div className='card__body'>
                <p className='card__body card__body--language'>{language}</p>
                <h1 className='card__body card__body--name'> {name} </h1>
                <div className='card__button--face'>
                    <Button
                        buttonClass='buttonLarge'
                        buttonText='See More'
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
    const cardInfoJSX = (
        <div className='card__content card__content--info'>
            <img
                src={WhiteCross}
                alt='close'
                className='card__cross'
                onClick={handleClick}
            />
            <div className='card__description'>
                <p className='card__description--text'> {description} </p>
            </div>
            <div className='card__body'>
                <p className='card__body card__body--language'>{language}</p>
                <h1 className='card__body card__body--name'> {name} </h1>
                <div className='card__link'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <Button
                            buttonClass='buttonLarge'
                            buttonText='Repository Link'
                        />
                    </a>
                </div>
            </div>
        </div>
    );

    return <div className='card'>{showMore ? cardFaceJSX : cardInfoJSX}</div>;
};

export default ProjectCard;
