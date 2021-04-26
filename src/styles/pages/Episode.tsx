import styled from 'styled-components'
import colors from '../colors.json'

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background: ${colors.gray.thin};

    padding: 2.65rem 4rem;
`

export const Thumb = styled.div`
    width: 50%;
    display: flex;
`
