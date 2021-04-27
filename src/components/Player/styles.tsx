import styled from 'styled-components'
import colors from '../../styles/colors.json'

export const PlayerContainer = styled.div`
    height: 100%;
    width: 25vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: ${colors.purple.dark};
`

export const Heading = styled.header`
    width: 100%;
    padding: 2.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
        height: 50px;
    }

    span {
        color: ${colors.white};

        font-size: 1.5rem;
        font-weight: 500;
    }
`
