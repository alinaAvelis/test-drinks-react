import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { RightArrow } from "../../right-arrow/right-arrow";

export const CollectionItem = (props) => {
    const [svgStyle, setSvgStyle] = useState(props.svgStyles);
    const [innerStyle, setInnerStyle] = useState(props.innerClass);
    const [btnStyle, setBtnStyle] = useState(props.btnClass);

    const classes = {
        containerClass: props.containerClass,
        innerClass: innerStyle,
        btnClass: btnStyle,
        svgStyles: svgStyle
    }
    
    // const setStyles = (svg, inner, btn) => {
    //     setSvgStyle(svg);
    //     setInnerStyle(inner);
    //     setBtnStyle(btn);
    // }

    // useEffect(() => {
    //     setStyles(props.svgStyles, props.innerClass, props.btnClass);
    // }, []);

    // const mouseEnterHundle = () => {
    //     setStyles(`${props.svgStyles} `, `${props.innerClass}`, `${props.btnClass}`);
    // }

    // const mouseLeaveHundle = () => {
    //     setStyles(props.svgStyles, props.innerClass, props.btnClass);
    // }

  
    return (

        <Link 
            className="text_decoration_none" 
            to={props.href}
            // onMouseEnter={mouseEnterHundle} 
            // onMouseLeave={mouseLeaveHundle}
        >
             <div className={classes.containerClass}>
                <p className={classes.innerClass}>
                    <span>
                        {props.text}
                    </span>

                    <span  className={classes.btnClass}>
                        <span>
                            <RightArrow svgStyles={classes.svgStyles}/>
                        </span>
                    </span>
                </p>
            </div>
        </Link>   
    )
}

CollectionItem.propTypes = {
    containerClass: PropTypes.string,
    innerClass: PropTypes.string,
    btnClass: PropTypes.string,
    svgStyles: PropTypes.string,
};