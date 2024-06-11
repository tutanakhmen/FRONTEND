import styled from "styled-components";


const StyledMovie = styled.div`
 max-width: 1200px;
 margin: 0 auto;

    img {
        max-width: 100%;
    box-shadow: 5px 10px #48cae4;
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    -o-border-radius: 40px;
    margin-bottom: 1rem;
    }

    h3 {
        color: #48cae4;
        font-size: 1.95rem;
        margin-bottom: 1rem;
    }

    p {
        color: #03045e;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        flex-basis: 50%;
    }

    @media screen and (max-width: 992px){
        lex-basis: 25%;
        padding: 1rem;
    }
`
export default StyledMovie