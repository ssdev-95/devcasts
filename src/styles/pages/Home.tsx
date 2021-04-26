import styled from 'styled-components'
import colors from '../colors.json'

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    background: ${colors.gray.thin};

    ul {
        display: flex;
        gap: 2rem;
    }
`

export const Card = styled.li`
    width: 25rem;
    height: 8rem;
    background: ${colors.white};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding: .75rem 1.25rem;

    img {
        border-radius: 24px;
    }

    div {
        max-width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`
