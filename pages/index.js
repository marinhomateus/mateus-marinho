import styled from 'styled-components'
import NavBar from './../src/components/NavBar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
  <>
    <Container>
      <NavBar/>
    </Container>
  </>
  );
}

const Container = styled.div`
  background: ${props => props.theme.colors.background2};
  height: 100vh;
`
