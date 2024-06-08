import React from 'react';

function AboutSectionItem(props) {
    
        return ( 
            <li className="about-item">
                <div className="about-item-wrapper">
                    <figure className='about-item-img-wrap'>
                            <img
                            className='about-item-img'
                            alt='StoneImage'
                            src={props.src}
                            />
                    </figure>

                    <div className="about-item-title-wrap">
                        <h5 className="about-item-title">
                            {props.title}
                        </h5>
                    </div>

                    <div className='about-item-text-wrap'>
                        <h3 className='about-item-text'>{props.text}</h3>
                    </div>
                </div>
            </li>
         );
    
}
 
export default AboutSectionItem;