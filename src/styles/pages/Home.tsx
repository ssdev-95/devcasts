import styled from 'styled-components'
import colors from '../colors.json'

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    background: ${colors.gray.thin};
`

export const Card = styled.li`
    width: 45rem;
    height: 10rem;
    background: ${colors.white};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    div {
        max-width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`
