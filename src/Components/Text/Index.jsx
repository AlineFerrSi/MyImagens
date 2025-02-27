import styled from "styled-components";

const WordText = styled.p`
    color: ${(props)=> props.$color };
    font-size: ${(props)=> props.$size };
    text-shadow:${(props)=> props.$shadown || "2px 2px 4px rgba(0, 0, 0, 0.3)"};

`

const Text = ({color,size,shadown, children})=>{
 
    return(
       
        <WordText
            $color={color}
            $size={size}
            $shadown ={shadown}
        >{children}</WordText>
        
    )
}

export default Text;