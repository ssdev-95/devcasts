import styled from 'styled-components'
import colors from '../../../colors.json'

export const Main = styled.main`
    height: 100%;
    width: 100%;
    padding: 4rem;
    background: ${colors.items.shape};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
    }

    table {
        width: 100%;

        th, td {
            padding: .75rem 1rem;
            border-bottom: 1px solid ${colors.text.body.medium};
        }

        th {
            text-align: left;
            color: ${colors.text.body.medium};
            text-transform: uppercase;
            font: 500 .75rem 'Inter', sans-serif;
        }

        td {
            font-size: .875rem;

            img {
                width: 5rem;
                height: 2.5rem;
                border-radius: .5rem;
            }

            a {
                color: ${colors.text.heading};
                font-weight: 600;
                text-decoration: none;
                line-height: 1.4rem;
                font-size: 1rem;

                &:hover {
                    text-decoration: underline;
                }
            }

            button {
                width: 2rem;
                height: 2rem;
                background: ${colors.items.background};
                border: 1px solid ${colors.items.shape};

                border-radius: .5rem;
                font-size: 0;
                transition: filter .2s ease;

                img {
                    height: 1.25rem;
                    width: 1.25rem;
                }

                &:hover {
                    filter:  brightness(.9);
                }
            }
        }
    }
`
//lol