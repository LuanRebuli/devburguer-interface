import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    padding-left: 40px;
    padding-bottom: 40px;
`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800px;
    color: #61A120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #61A120;
    }
`
