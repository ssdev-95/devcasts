import React from 'react'
import { Navbar, Logo } from './styles'

export default function Header() {
    return (
        <Navbar>
            <div>
                <Logo>
                    <img src="favicon.svg" alt="Logo"/>
                    <span>Devcasts</span>
                </Logo>
                <span>|</span>
                <span>The best podcasts, ever</span>
            </div>
            <span>Mon, April 26</span>
        </Navbar>
    )
}
