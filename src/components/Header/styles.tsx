import styled from 'styled-components'

export const Navbar = styled.nav`
    width: 75vw;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .2rem 3rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        height: 45px;
    }
`
