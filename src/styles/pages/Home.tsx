import styled from 'styled-components'
import colors from '../colors.json'

export const HomeContainer = styled.div`
    width: 100%;
    height: 90vh;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 2.5rem 4rem;

    overflow-y: scroll;

    background: ${colors.gray.thin};

    div {
        width: 100;


        h2 {
            align-self: flex-start;
        }
    }

    ul {
        display: flex;
        width: 100%;
        gap: 2.35rem;
        align-items: center;
        justify-content: center;
    }
`

export const Card = styled.li`
    width: 33rem;
    height: 8rem;
    background: ${colors.white};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding: .75rem 1.25rem;
    border-radius: 6px;

    img {
        border-radius: 24px;
    }

    div {
        max-width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: .25rem;

        span {
            &:first-child {
                color: ${colors.gray.medium};
                font-weight: 600;
                cursor: pointer;
            }

            &:not(:first-child) {
                color: ${colors.gray.soft};
            }
        }

        a {
            text-decoration: none;
            color: ${colors.gray.medium};
        }
    }

    button {
        font-size: 0;
        padding: .25rem;
        background: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
    }
`

export const Table = styled.table`
    width: 100;

    tr {
        height: 4rem;
        width: 100%;

        td:last-child {
            width: 2rem;
        }
    }

    thead {
        text-align: left;
    }

    tbody {
        tr {
            &:hover {
                border-bottom: 1px solid ${colors.gray.medium};
                filter: brightness(.8);
            }

            td {
                background: ${colors.white};

                color: ${colors.gray.medium};

                img {
                    border-radius: 24px;
                }

                button {
                    font-size: 0;
                    padding: .25rem;
                    background: rgba(0, 0, 0, 0);
                    border: none;
                    cursor: pointer;
                }

                div {
                    display: flex;
                    flex-direction: column;

                    gap: .55rem;

                    span {
                        word-wrap: wrap;
                        
                        &:first-child {
                            color: ${colors.gray.medium};
                            font-weight: 600;
                            cursor: pointer;
                        }

                        &:not(:first-child) {
                            color: ${colors.gray.soft};
                        }
                    }
                }

                &:first-child {
                    padding: 0 .95rem;
                }
            }
        }
    }
`
