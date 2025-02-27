import styled from "styled-components";

const ButtonStyled = styled.button`
    cursor: pointer;
    border-radius:10px;
    
`


const Button = ({ children }) => {
   
    return (
        
        <ButtonStyled >
            {children}
            
        </ButtonStyled>
    )
}

export default Button;