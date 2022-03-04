import React, {useState} from 'react';
import PropTypes from 'prop-types';

import logo from './logo-img.svg';

export const Logo = (props) => {
    const classes = {
        logoClass: props.logoClass || '',
        imgClass: props.imgClass || 'img',
        nameClass: props.nameClass || '',
        descClass: props.descClass || ''
    }
    // const [opacity, setOpacity] = useState(1);
    // const style = {
    //     opacity: opacity
    // }

    // const mouseEnterHundle = () => {
    //     setOpacity(0.5)
    // }

    // const mouseLeaveHundle = () => {
    //     setOpacity(1)
    // }
  
    return (
        <div 
            // style={style}
            className={classes.logoClass}
            // onMouseEnter={mouseEnterHundle} 
            // onMouseLeave={mouseLeaveHundle}
            >
            {props.isImg && <img className={classes.imgClass} src={logo} alt="логотип"/> }
            {props.isName && <p className={classes.nameClass}>{props.companyName}</p>}
            {props.isDesc && <p className={classes.descClass}>{props.desc}</p>}                    
        </div>
    )
}

Logo.propTypes = {
    isImg: PropTypes.bool,
    isName: PropTypes.bool,
    isDesc: PropTypes.bool,
    logoClass: PropTypes.string,
    imgClass: PropTypes.string,
    nameClass: PropTypes.string,
    descClass: PropTypes.string,
    companyName: PropTypes.string,
    desc: PropTypes.string,
};
  