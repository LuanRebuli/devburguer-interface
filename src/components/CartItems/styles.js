import styled from "styled-components";

export const ProductImage = styled.img`
    width: 100px;
    height: 80px;
    border-radius: 16px;
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background: #9758a6;
        transition: all 0.4ms;
        border: none;

        &:hover {
            background-color:#6f357c;
        }
    }
`

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`

export const TrashImg = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`


