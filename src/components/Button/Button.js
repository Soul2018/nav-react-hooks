import React from "react";
import PropTypes from "prop-types";
import { 
ButtonThemed,
} from "./ButtonStyle";

export function Button({theme="primary", label="Button"}) {
    return (
    <>
        <ButtonThemed theme={theme}>{label}</ButtonThemed>
    </>
    )
}

Button.propTypes = {
theme: PropTypes.string,
label: PropTypes.string,
};