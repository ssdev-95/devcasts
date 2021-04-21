import styled from 'styled-components'
import colors from '../../../colors.json'

export const Container = styled.div`
    background: ${colors.items.background};
    border: 1px solid ${colors.text.body.medium};
    border-radius: 24px;
    padding: 1.25rem;
    position: relative;

    display: flex;
    align-items: center;

    img {
        width: 6rem;
        height: 5.99rem;
        border-radius: 1rem;
    }

    button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        background: ${colors.items.background};
        border: 1px solid ${colors.items.shape};

        border-radius: .675rem;
        font-size: 0;
        transition: filter .2s ease;

        img {
            height: 1.5rem;
            width: 1.5rem;
        }

        &:hover {
            filter:  brightness(.9);
        }
    }
`

export const Details = styled.div`
    flex: 1;
    margin-left: 1rem;

    a {
        display: block;
        color: ${colors.text.body.medium};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        font-size: .875rem;
        margin-top: .5rem;
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        display: inline-block;
        font-size: .875rem;
        margin-top: .5rem;

        &:last-child {
            margin-left: .5rem;
            padding-left: .5rem;
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
`
