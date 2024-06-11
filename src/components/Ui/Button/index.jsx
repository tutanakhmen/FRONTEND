import styled, { css } from "styled-components";

// buat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border-style: none;
    border-radius: 10px;
    box-shadow: 5px 7px #000000;
    color: #ffffff;
    background-color: #48cae4;
    cursor: pointer;

    /* akses props variant */
    /* background-color: ${(props) => {
        if (props.variant === "primary"){
            return "#fff"
        }
        else if(props.variant === "secondary") {
            return "#992a0e"
        }
        else {
            return "#4361ee"
        }
    }}; */

    /* props full */
    ${(props) => props.full && css `
        display: block;
        width: 100%;
    `}

    background-color: ${({theme, variant }) => theme.colors[variant] || theme.colors.primary}
`;

export default Button