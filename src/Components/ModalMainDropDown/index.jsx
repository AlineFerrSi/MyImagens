import styled from "styled-components";
import Button from "../Button/Index";
import { useState } from "react";
import ModalCreatePhoto from "../ModalCreatePhoto/Index";

const MainContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const PopupContainer = styled.div`
    background-color: #041833;
    border: none;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 50%;
    height: 100vh;

    @media (max-width: 1304px) {
        width: 60%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const ContainerButton = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;

    @media (max-width: 1304px) {
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

const ContainerMain = styled.div`
    margin: 60px 50px 0px 0px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 25px;

    input {
        width: 94%;
        padding: 10px;
        font-size: 1.2rem;
        border: 2px solid #ccc;
        border-radius: 5px;
        outline: none;
        transition: border-color 0.3s;

        &:focus {
            border-color: #7B78E5;
        }
    }

    div {
        width: 96%;
        background-color: transparent;
        color: #7B78E5;
        border: 3.5px solid #7B78E5;
        padding: 5px;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
            background-color: #7B78E5;
            color: white;
        }
        button{
            border:none;
            background-color:rgba(114, 27, 27, 0);
            color: white;
        }
    }
`;

const ModalMainDropDown = ({ openModal }) => {

    const [handleOpenModal,SetHandleOpenModal] = useState()

    function showModal(){
        SetHandleOpenModal(true)
 
    }

    return (
        <MainContainer>
            <PopupContainer>
                <ContainerButton>
                    <ButtonClose onClick={() => openModal(false)}>x</ButtonClose>
                </ContainerButton>

                <ContainerMain>
                    <input type="text" placeholder="O que você procura?..." />
                    <div onClick={()=> {showModal()}  }> 
                      <Button>+</Button>  
                    </div>
                    
                </ContainerMain>
            </PopupContainer>
            {handleOpenModal  && <ModalCreatePhoto openModal={SetHandleOpenModal} />}
        </MainContainer>
    );
};

export default ModalMainDropDown;
