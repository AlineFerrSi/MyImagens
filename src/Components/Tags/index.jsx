import Text from "../Text/Index";
import ButtonTag from "./ButtonTag/Index";
import styled from "styled-components";

const StyledConainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:30px;

    @media (max-width: 1304px) {
        flex-wrap:wrap;
        padding:0px 0px 15px 0px;
    }


`


const Tag = ()=>{


    return(
        <StyledConainer>
            <Text
                color="#D9D9D9"
                size="26px"
            > 
                Busque por tags:
            </Text> 
            <ButtonTag />
        </StyledConainer>
    )
}

export default Tag;