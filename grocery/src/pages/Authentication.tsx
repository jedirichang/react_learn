import { Outlet } from "react-router"
import styled from "styled-components"
import welcomeImage from '../assets/welcome.jpg';
function Authentication() {
    return (
        <Container>
            <LeftPanel>
                <Outlet />
            </LeftPanel>
            <RightPanel>
                <img src={welcomeImage} />
            </RightPanel>
        </Container>
    )
}

export default Authentication

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

const LeftPanel = styled.div`
    height: 100vh;
    width: 60%;
    box-shadow: rgb(0 0 0 / 69%) 24px 26px 30px -10px, rgb(0 0 0 / 73%) 16px 16px 10px -10px;
    z-index: 1;
`

const RightPanel = styled.div`
    background-color: green;
    height: 100vh;
    width: 40%;
    overflow: hidden;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`