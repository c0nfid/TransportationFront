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
        },
        'Input': {
            fontSize: `20px`,
            paddingTop: `6px`,
            paddingBottom: `6px`,
            paddingLeft: `15px`,
            paddingRight: `15px`,
        }
    };
    return (
            <button className={classes.StyledButton} style={{fontSize: `${presets[preset].fontSize}`,
                paddingTop: `${presets[preset].paddingTop}`,
                paddingBottom: `${presets[preset].paddingBottom}`,
                paddingLeft: `${presets[preset].paddingLeft}`,
                paddingRight: `${presets[preset].paddingRight}`,}
            } onClick={props.onClick}>{props.children}</button>
    );
};

export default StyledButton;