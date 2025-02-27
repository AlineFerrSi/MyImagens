import styled from "styled-components";
import Text from "../Text/Index";
import Card from "./Card/Index";



const MainContainer = styled.div`

    display: flex;
    flex-direction:column;
    align-items: start; 
    justify-content:start;

    >p{
        padding:0px 0px 30px 100px;
    }

`


const Main = ({photoArrey,setPhotoArrey}) => {
    return (
        <MainContainer>
            <Text
                color="#7B78E5"
                size="30px"
            >Navegue pela galeria</Text>

            <div>
                <Card picArray = {photoArrey} setPicArray={setPhotoArrey}  ></Card>
            </div>
            
        </MainContainer>
    )
}

export default Main;