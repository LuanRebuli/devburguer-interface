import styled from "styled-components";

export const Container = styled.div``

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`

export const EditButton = styled.button`
    border: 0;
    background-color: #f4f4f4;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 18px;
        width: 18px;
    }

    &:hover{
        background-color: purple;

        svg {
            fill: white;
        }
    }
`