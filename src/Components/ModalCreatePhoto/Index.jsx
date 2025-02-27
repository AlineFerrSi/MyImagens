import styled from "styled-components";
import BoxInput from "../BoxInput/Index";
import Button from "../Button/Index";
import { useState } from "react";

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PopupContainer = styled.div`
    width: 65%;
    height:53%;
    background-color: #041833;
    border: none;
    border-radius: 10px;
    border: 3px solid #7B78E5;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:center;
    position: relative;

    @media (max-width: 1304px) {
        width: 45%;
        height:50vh;
        padding: 60px;
      
    }

`

const ContainerButton = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;

    
    @media (max-width: 1304px) {
        top: 10px;

        right: 15px;
    }
`;

const ButtonClose = styled.button`
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
`;


const CardContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center; /* Adicionado para centralizar horizontalmente */
    gap: 25px;
    width: 100%; /* Garante que ele ocupe todo o espaço disponível */
 

    > div {
        display: flex;
        flex-direction: column;
        align-items: center; /* Garante que o conteúdo interno esteja centralizado */
        width: 100%; /* Para ocupar todo o espaço do contêiner */
        max-width: 90%;
    }

    @media (max-width: 1304px) {
        flex-direction: column; /* Empilha os itens em telas pequenas */
        align-items: center; 
        text-align: center;
        max-width: 100%;
    }
`;


const TextArea = styled.textarea`
    width: clamp(30vw, 150vh, 900px);
    max-width: 90%;
    height:200px;
    border: none;
    border-radius: 10px;
    border: 3px solid #7B78E5;
    outline:none;
    padding:10px;
    

    @media (max-width: 1304px) {
        width: clamp(20vw, 80vh, 70vh);
        max-width: 95%;
    }
`;

const ContainerButtonAdd = styled.div`
    
    

`;

const InputButtonWrapper  = styled.div`
    
    display: flex;
    flex-direction:row;
    justify-content:start;
    align-items:start;
    padding: 5px 0px 0px 0px;
    

    > Button { 
        background-color: rgba(255, 255, 255, 0);
        color: #7B78E5;
        border: 3.5px solid #7B78E5;
        padding: 5px 25px;
        font-size: 23px;
        margin:0px 0px 0px 50px; 
    }

    @media (max-width: 1304px) {
        width: clamp(20vw, 80vh, 70vh);
        max-width: 95%;
    }



`;








const ModalCreatePhoto = ({ openModal }) => {

    return (
        <MainContainer>
            <PopupContainer open>
                <ContainerButton>
                    <ButtonClose onClick={() => { openModal(false) }}>x</ButtonClose>
                </ContainerButton>

                <CardContainer  >

                    <BoxInput  
                        placeholder="Digite o nome da Imagem"
                        size={{
                            width: "500px",
                            height: "20px"
                        }}
                        background={{
                            secondary: "#7B78E5"
                        }}
                        

                    />

                    <TextArea placeholder="Sobre a Imagem:" />

                    <ContainerButtonAdd>
                        <InputButtonWrapper >
                            <BoxInput
                                placeholder="Digite uma Tag"
                                size={{
                                    width: "400px",
                                    height: "18px"
                                }}
                                background={{
                                    secondary: "#7B78E5"
                                }}

                            />
                            <Button>
                                Adicionar
                            </Button>

                        </InputButtonWrapper >

                    </ContainerButtonAdd>

                </CardContainer >

            </PopupContainer >
        </MainContainer>
    )
}

export default ModalCreatePhoto;