import styled from 'styled-components'
import colors from '../colors.json'

export const EpisodeContainer = styled.div`
    width: 100%;
    height: 90vh;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    background: ${colors.gray.thin};

    padding: 2.65rem 4rem;

    header {
        max-width: 80%;

        h1 {
            font-size: 2rem;
            color: ${colors.gray.medium};
        }

        span {
            color: ${colors.gray.dark};
            font-weight: 500;
        }
    }
`

export const Thumbnail = styled.div`
    max-width: 50%;
    display: flex;
    position: relative;

    img {
        border-radius: 24px;
    }

    button {
        position: absolute;
        top: 40%;
        padding: 1rem 1.5rem;

        font-size: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: rgba(0, 0, 0, .45);
        border-radius: 12px;

        z-index: 99;

        &:hover {
            filter: brightness(.6) invert(10%);
        }

        img {
            height: 30px;
        }
    }
`

export const PodcastDetails = styled.div`
    width: 95%;
    
    p {
        font-size: 1.45rem;
        color: ${colors.gray.medium};
    }
`
