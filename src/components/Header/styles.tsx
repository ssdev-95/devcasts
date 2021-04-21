import styled from 'styled-components'
import colors from '../../../colors.json'

export const Container = styled.div`
    height: 4rem;
    width: 63.5rem;

    background: ${colors.items.background};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 3rem;
    
    color: ${colors.text.body.dark};
    font-weight: bold;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
