import styled from 'styled-components'

import colors from '../../../colors.json'

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem 1.15rem;
    border-radius: 25%;

    &:hover {
        background-color: ${colors.primary.purple['200']};
    }
`
