import styled from 'styled-components'
import colors from '../../../colors.json'

export const PlayerContainer = styled.div`
    height: 100vh;
    width: 26.5rem;

    padding: 4rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    background: ${colors.primary.purple["300"]};
    color: ${colors.items.line};
`

export const Timer = styled.div`
    display: flex;
    gap: .25rem;
    justify-content: center;
`

export const Actions = styled.div`
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;

    gap: .5rem;
`
