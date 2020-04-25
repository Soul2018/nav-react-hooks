import styled from "styled-components";
// Define our button, but with the use of props.primary this time
 // we need to check out if user passes anything else different than:
    // 1- primary
    // 2 - seconadary
    // 3- tertiary
    // then we default to primary button behavior
export const ButtonThemed = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => {
    if((props.theme === "primary") || props.theme !== ("secondary" || "primary")) return primary.col
    if(props.theme === "secondary") return primary.back;
  }};
  background: ${ props => {
    if((props.theme === "primary") || props.theme !== ("secondary" || "primary")) return primary.back
    if(props.theme === "secondary") return primary.col;
  }};
  border: 2px solid ${props => props.theme.col};
  border-width: ${props => (props.theme === tertiary ? "inherit" : "initial")};
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${ props => {
    if((props.theme === "primary") || props.theme !== ("secondary" || "primary")) return primary.hover
    if(props.theme === "secondary") return primary.back;
    }};
    color: ${ props => primary.col}; 
  };
`;

// Define what primary theme
export const primary = {
  back: "#F96302",
  col: "#ffffff",
  hover:"#fd751b",
};

export const secondary = {
  col: primary.back,
  back: primary.col
};
// Define what tertiary theme
export const tertiary = {
  
}

