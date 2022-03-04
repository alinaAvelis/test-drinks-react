import React from "react";
import './close-btn.scss';

export const CloseBtn = (props) => {
    const classes = {
        btnStyle: props.btnStyle,
        svgStyles: props.svgStyles
    }

    const onClickHundle = () => {
        props.onClickCloseHundler()
    }
    return (
        <button className={classes.btnStyle}  onClick={onClickHundle}>
            <svg className={classes.svgStyles}  viewBox="0 0 16 16" aria-labelledby="title">
                <title id="title">Закрыть</title>
                <path d="M1.34406 1.3548L14.8759 14.8867" stroke="#1D1D1B"/>
                <path d="M1.34406 14.8835L14.6915 1.3334" stroke="#1D1D1B"/>
            </svg>
        </button>
    )
}