import styled from 'styled-components'
import colors from '../../styles/colors.json'

export const SliderContainer = styled.div`
    z-index: 99;

    position: absolute;
    top: 1rem;
    right: 1rem;
`

export const Wrapper = styled.div`
    height: 8px;
    width: 30px;
    border-radius: 24px;

    position: relative;
    transition: all .2s ease;
`

export const Thumb = styled.div`
    height: 10px;
    width: 10px;

    border: none;
    border-radius: 50px;

    position: absolute;
    top: -1px;

    background: ${colors.gray.thin};
    transition: all .2s ease;
`
