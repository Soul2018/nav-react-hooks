import React from "react";
import PropTypes from "prop-types";
import { 
ButtonThemed,
 } from "./ButtonStyle";

export function Button({theme="primary"}) {
    return (
    <>
        <ButtonThemed theme={theme}>Primary</ButtonThemed>
    </>
    )
}

// prop types goes here
Button.propTypes = {
    theme: PropTypes.string
};