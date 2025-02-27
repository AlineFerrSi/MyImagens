import { useState } from 'react'
import styled from 'styled-components'
import EstilosGlobais from './Components/EstilosGlobais/Index'
import Header from './Components/Header/Index'
import Line from './Components/Line/Index'
import Tag from './Components/Tags'
import Main from './Components/Main/Index'
import photos from './fotos.json'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  padding:40px;
  align-items:center;
  min-height:100vh;
  background-color: #041833;

`



function App() {

  const [photo, setPhoto] = useState(photos);
  return (
    <Container>
      <EstilosGlobais />
      <Header photoArrey={photo} setPhoto={setPhoto}  />
      <Line />
      <Tag />
      <Main photoArrey={photo} setPhotoArrey = {setPhoto}></Main>
  
    </Container>
  )
}

export default App
