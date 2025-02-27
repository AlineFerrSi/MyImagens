import BoxInput from "../BoxInput/Index";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Text from "../Text/Index";
import Button from "../Button/Index";
import styled from "styled-components";
import MainDropDown from "../MainDropDown";
import { useState } from "react";
import ModalCreatePhoto from "../ModalCreatePhoto/Index";

const StyledConainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
  
    max-height:100vh;

   
    @media (max-width: 1200px) {
        display: flex;
        flex-direction:column;
        
    }

    @media (max-width: 1020px) {
        display: flex;
                flex-direction:row;
    }
`

const TextTite = styled.div`
    display:flex;
    gap: 10px;

`
const MenuIcone = styled.div`
display: none;

@media (max-width: 1020px) {
  
    display: block;
  
}
`

const InputContainer = styled.div`
  margin:0px 80px 0px 80px;

  @media (max-width: 1020px) {
        margin:0px 0px 0px 0px;
    } 
    @media (max-width: 1020px) {
        display: none;

    } 
`;

const CustomInputField = styled.div`

    display: flex;
    padding:0px 50px 15px 0px;

`;

const ContainerButton= styled.div`

display: flex;
padding:0px 50px 15px 0px;


> Button { 
    margin:0px 0px 0px 0px;
    background-color: rgba(255, 255, 255, 0);
    color:#7B78E5;
    border: 3.5px solid #7B78E5 ;
    padding:3px 25px;
    font-size:40px;
    display: block;

   @media (max-width: 1020px) {display: none;}
}

`;




const Header = ({photoArrey,setPhoto }) => {

    const [modalCreatePhoto, setModalCreatePhoto] = useState();
    const [inputValue, setInputValue]= useState("");
   

    function handleOpenModal(item) {
        setModalCreatePhoto(true) // Modal abre ao clique
    }


    const filterName = (e) => {
        const valor = e.target.value.toLowerCase();
        setInputValue(valor);
    
        // Usar "valor" diretamente, pois "inputValue" ainda não foi atualizado
        const ImgFound = photoArrey.filter(photo => photo.titulo.toLowerCase().includes(valor));
        
        if (valor === "") {
            
            setPhoto(photos);
            
        } else {
        setPhoto(ImgFound);
        }

        
    };
    
    

    return (
        <StyledConainer>
            <TextTite >
                <Text
                    color="#FFFFFC"
                    size="36px"
                    shadown="2px 2px 4px rgba(0, 0, 0, 0.3)" >My</Text>

                <Text
                    color="#7B78E5"
                    size="36px"
                    shadown="2px 2px 4px rgba(0, 0, 0, 0.3)" >Imagem</Text>
            </TextTite>
            <CustomInputField>
                <InputContainer >

                    <div  onChange={filterName} >
                        <BoxInput 
                        placeholder="O que você procura?"
                        size={{
                            width: "725px",
                            height: "30px"
                        }}

                        background={{
                            secondary: "#7B78E5"
                        }}
                        
                        value={inputValue}
                       
                    />
                    </div>
                    
                </InputContainer>

                <ContainerButton onClick={() => handleOpenModal(true) }>
                    <Button>
                        + 
                    </Button>
                </ContainerButton> 
               
                
            </CustomInputField>

            <MenuIcone >
                <MainDropDown />
            </MenuIcone>
            {modalCreatePhoto && <ModalCreatePhoto openModal ={setModalCreatePhoto}  />}
        </StyledConainer>
    );
};

export default Header;
