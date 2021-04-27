import React from 'react'

import { useTheme } from '../../contexts/Theme'

import { SliderContainer, Wrapper, Thumb } from './styles'

export default function Slider() {
    const { theme, toggleTheme } = useTheme()
    const wrapperBg = theme === 'light' ? '#494D4B' : '#04D361'
    const thumbPos = theme === 'light' ? '-1px' : '25px'

    return (
        <SliderContainer>
            <Wrapper onClick={toggleTheme} style={{background: wrapperBg}}>
                <Thumb style={{left: thumbPos}} />
            </Wrapper>
        </SliderContainer>
    )
}