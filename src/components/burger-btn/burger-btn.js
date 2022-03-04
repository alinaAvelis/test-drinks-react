import React from "react";
import "./burger-btn.scss"

export const BurgerBtn = (props) => {
    const classes = {
        btnStyle: props.btnStyle
    }

    const onClickHundle = () => {
        props.onClickBurgerHundler();
    }
    return (
        <button className={classes.btnStyle} onClick={onClickHundle}>
            <span className="burger_lines">
                <span className="burger_line"></span>
                <span className="burger_line"></span>
            </span>
        </button>
    )
}