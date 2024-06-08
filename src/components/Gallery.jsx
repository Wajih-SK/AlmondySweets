import React from 'react';
import '../App.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import './Gallery.css'
import { useState } from 'react';


function Gallery() {
    const [current, setCurrent] = useState(0)
    const handleLeftArrow = () => {
        setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
    };

    const handleRightArrow = () => {
        setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
    };

    const handleImageSelect = (index) => {
        setCurrent(index);
        window.scrollTo(0, 0);
    };

        return (
            <React.Fragment>
                <div className="image-slider-container">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={handleLeftArrow}></FaArrowAltCircleLeft>
                        <FaArrowAltCircleRight className="right-arrow" onClick={handleRightArrow}></FaArrowAltCircleRight>
                    <div className="image-slider-wrapper">
                        
                        {SliderData.map((slide, index) => {
                            return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                <img src={slide} alt='travel' className='image' />
                                )}
                            </div>
                            );
                        })}
                        
                    </div>
                </div>
                <div className="image-list-container">
                    <div className="image-list-wrapper">

                        {SliderData.map((slide, index) => {
                                
                                return (
                                <div
                                    className={"listed-image-wrapper"}
                                    key={index}
                                    onClick={() => {handleImageSelect(index)}}
                                >
                                    <img src={slide} alt='travel' className='listed-image' /> 
                                </div>
                                );
                            })}
                    </div>
                </div>
            </React.Fragment>
         );
    }
 
export default Gallery;