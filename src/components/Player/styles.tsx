import styled from 'styled-components'
import colors from '../../styles/colors.json'

const gradientostart = 'rgba(145, 100, 250, .8)'
const gradientoend = 'rgba(0, 0, 0, 0)'

export const PlayerContainer = styled.div`
    height: 100%;
    width: 25vw;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: ${colors.purple.dark};
`

export const Heading = styled.header`
    width: 100%;
    padding: 2.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
        height: 45px;
    }

    span {
        color: rgba(255,255,255,.68);

        font-size: 1.25rem;
        font-weight: 500;
    }
`

export const EmptyPlayer =  styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 22.25rem;
    width: 18.5rem;

    background: linear-gradient(180deg, ${gradientostart} 0%, ${gradientoend} 100%);
    border-radius: 18px;
    color: rgba(255,255,255,.68);
`

export const Details = styled.section`
    text-align: center;
    height: 22.25rem;
    width: 18.5rem;

    color: ${colors.white};

    img {
        border-radius: 1.5rem;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font: 400 .95rem 'Inter';
        line-height: 1.75rem;
    }

    span {
        display: block;
        margin-top: 1rem;
        opacity: .6;
        line-height: 1.5rem;
    }
`

export const Footing = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: .75rem;

    button {
        font-size: 0;
        padding: 1rem 1.25rem;
        background: rgba(0, 0, 0, 0);

        border-radius: 8px;
        border: none;

        cursor: pointer;

        &:hover {
            border-bottom: 1px solid ${colors.gray.dark};
            filter: brightness(.68);
        }
    }
`

export const Trackbar = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    span {
        color: ${colors.white};
        font-size: .9rem;
    }
`

export const EmptyTrack = styled.div`
    width: 7rem;
    height: 3px;
    background: ${colors.purple.light};
`
