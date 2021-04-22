import React from 'react'
import styled from 'styled-components'
import colors from '../../../colors.json'

export const EpisodeContainer = styled.div`
    max-width: 45rem;
    height: 100%;
    padding: 3rem 2rem;
    margin: 0 auto;
    overflow-y: scroll;
`

export const Thumbnail = styled.div`
    position: relative;

    img {
        border-radius: 1rem;
    }

    button {
        width: 3rem;
        height: 3rem;
        border-radius: .75rem;
        border: 0;
        position: absolute;
        z-index: 5;

        font-size: 0;
        transition: filter .2s ease;
        cursor: pointer;

        &:first-child {
            left: 0;
            top: 50%;
            background: ${colors.primary.purple.dark};
            transform: translate(-50%, -50%)
        }

        &:last-child {
            right: 0;
            top: 50%;
            background: ${colors.primary.purple.dark};
            transform: translate(50%, -50%)
        }

        &:hover {
            filter: brightness(.9);
        }
    }

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid ${colors.text.body.medium};

        h1 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        span {
            display: inline-block;
            font-size: .875rem;

            & + span {
                margin-left: 1rem;
                padding-left: 1rem;
                position: relative;

                &::before {
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-radius: 2px;
                    background: ${colors.items.line};
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
`

//lol

export const Description = styled.div`
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${colors.text.body.dark};

    p {
        margin: 1.5rem 0;
    }
`
