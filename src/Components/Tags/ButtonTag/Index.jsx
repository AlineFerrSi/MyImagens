import styled from "styled-components";
import Button from "../../Button/Index";

const StyledConainer = styled.div`
    display:flex;
    gap: 20px;
    max-height:100vh;

    > Button {
       
        background-color:#ffffff65 ;
        color:#ffffff;
        border: 3.5px solid #7B78E5 ;
        padding:5px 15px;
        font-size:20px;
       


    }

    @media (max-width: 1304px) {
        flex-wrap:wrap;
    }

`


const ButtonTag= ()=>{

    return(
        <StyledConainer>
            <Button >Favoritas</Button >
            <Button >Paisagens</Button >
            <Button >passaros</Button >
            <Button >pessoas</Button >
            <Button >Praia</Button >
        </StyledConainer>
    )

}
export default ButtonTag;