import React from 'react'
import format from 'date-fns/format'
import enUS from 'date-fns/locale/en-US'

import { Container, Logo } from './styles'
import colors from '../../../colors.json'

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: enUS,
  })

  return (
    <Container>
      <Logo>
        <img style={{height: '35px'}} src="favicon.svg" />
        <span style={{color: colors.items.line}}>Dev.casts</span>
      </Logo>
      <span>The best to listen, ever.</span>
      <span>{currentDate}.</span>
    </Container>
  )
}
