import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width };
`;

const Box = styled.input`
  width: 100%;
  padding: 10px 10px; /* Espaço extra para o ícone */
  font-size: 21px;
  color: "#424242"; /* Cor do texto */
  height: ${(props) => props.height };
  border: 4px solid #7B78E5 ; 
  border-radius: 5px; /* Bordas arredondadas */
  outline: none; /* Remove o contorno padrão ao focar */
`;



const BoxInput = ({ placeholder, size, background }) => {

  return (
    <Container width={size?.width}>
      <Box 
        placeholder={placeholder}
        height={size?.height}
        $primary={background?.primary}
        $secondary={background.secondary}
        $bgColor={"#fff"}
      />
    </Container>
  );
};

export default BoxInput;
