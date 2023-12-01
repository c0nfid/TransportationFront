import React from 'react';
import classes from "./StyledButton.module.css";

const StyledButton = (props) => {
    const preset = props.preset ? props.preset : 'Bold'
    const presets = {
        'Bold': {
            fontSize: `32px`,
            paddingTop: `8px`,
            paddingBottom: `8px`,
            paddingLeft: `20px`,
            paddingRight: `20px`,
            background: `#FFFFFFCC`,
            borderColor: `#000000`,
            color: `#000`,
        },
        'Input': {
            fontSize: `20px`,
            paddingTop: `6px`,
            paddingBottom: `6px`,
            paddingLeft: `15px`,
            paddingRight: `15px`,
            background: `rgba(255, 255, 255, 0)`,
            borderColor: `#9892a7`,
            color: `wheat`,
        }
    };
    return (
            <button className={classes.StyledButton} style={{
                fontSize: `${presets[preset].fontSize}`,
                paddingTop: `${presets[preset].paddingTop}`,
                paddingBottom: `${presets[preset].paddingBottom}`,
                paddingLeft: `${presets[preset].paddingLeft}`,
                paddingRight: `${presets[preset].paddingRight}`,
                background: `${presets[preset].background}`,
                borderColor: `${presets[preset].borderColor}`,
                color: `${presets[preset].color}`,
            }
            } onClick={props.onClick}>{props.children}</button>
    );
};

export default StyledButton;