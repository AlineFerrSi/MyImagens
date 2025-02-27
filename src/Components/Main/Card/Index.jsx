import Text from "../../Text/Index";
import { CiHeart } from "react-icons/ci";

import { useState } from "react";
import styled from "styled-components";
import ModalZoom from "../../ModalZoom/Index";
import { FaHeart } from "react-icons/fa";


const MainContainer = styled.div`
 display:flex;
 flex-wrap: wrap;
 align-items:center;
 justify-content:center;
 gap:30px;
`


const ContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
    background-color:#001634;
    padding: 0px  0px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  
    

`

const ImgContainer = styled.img`
    width: 390px;
    height: auto;
    border-radius: 10px 10px 0px 0px ;
    cursor:pointer;

`;

const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    padding:8px 15px 8px 15px;

    >div{

        display: flex;
        gap:20px;
        color:#FFFFFC;
        
    }

`




const Card = ({picArray,setPicArray}) => {
  
    const [openModal, setOpenModal] = useState(false);
    const [PhotoSelect, setphotoSelect] = useState();


    const onFavoriteChange = (element) => {
        setPicArray(
            picArray.map((Photo) =>
                Photo.id === element.id ? { ...Photo, favorite: !Photo.favorite } : Photo
            )

        )
    };


    function handleOpenModal(item) {
        setOpenModal(true) // Modal abre ao clique
        setphotoSelect(item)

    }


    return (
        <MainContainer>

            {picArray.map((img) => (

                <ContainerCard key={img.id}>
                    <div >

                        <ImgContainer
                            src={img.path}
                            alt={img.titulo}
                            id={img.id}
                            title={img.sobre}
                            onClick={(item) => { handleOpenModal(item) }}

                        />
                    </div>
                    <Options>

                        <Text
                            color="#FFFFFC"
                            size="20px"
                        >{img.titulo}</Text>

                        <div onClick={() => onFavoriteChange(img)} >

                            {img.favorite ? (
                                <CiHeart style={{ cursor: 'pointer' }} />
                            ) : (
                                <FaHeart style={{ cursor: 'pointer' }} />
                            )}

                        </div>

                    </Options>
                </ContainerCard>


            ))}
            {openModal && <ModalZoom openModal={setOpenModal} fotoSelecionada={PhotoSelect} />}

        </MainContainer>
    );
};

export default Card;
 