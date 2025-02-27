import styled from "styled-components";



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
    background-color: #FFFFFC;
    border: none;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:center;
    position: relative;

    @media (max-width: 1304px) {
        width: 45%;
        height:80vh;
      
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
    color: #000;
   
`;


const CardContainer  = styled.div`
    display:flex;
    gap:25px;
    
    >div{

        display:flex;
        flex-direction:column;
        
    }

    @media (max-width: 1304px) { 

        flex-direction: column; /* Empilha os itens em telas pequenas */
        align-items: center; 
        text-align: center;
        max-width: 100%; /* Para não ultrapassar o container */
        max-height: 100%; /* Para manter o tamanho adequado */
    }
`;

const StyledImage  = styled.img`
    width: clamp(20vw, 80vh, 1004px);
    max-width: 100%;
    border-radius: 10px;

    @media (max-width: 1304px) {
        width: clamp(20vw, 80vh, 70vh);
    }
`;



const ModalZoom = ({ openModal, fotoSelecionada }) => {



    return (
        <MainContainer>
            <PopupContainer  open>
                <ContainerButton>
                    <ButtonClose onClick={() => { openModal(false) }}>x</ButtonClose>
                </ContainerButton>

                <CardContainer  key={fotoSelecionada.target.id}>

                    <StyledImage 
                        src={fotoSelecionada.target.src}
                        alt={fotoSelecionada.target.alt}
                    />

                    <div>
                        <h2>{fotoSelecionada.target.alt}</h2>
                        <p>{fotoSelecionada.target.title}</p>

                    </div>

                </CardContainer >

            </PopupContainer >
        </MainContainer>
    );
};

export default ModalZoom;

