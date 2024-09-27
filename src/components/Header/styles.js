import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: 72px;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 56px;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    hr {
        height: 24px;
        border: 0.5px solid #625e5e;
    }
`
export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? "#9758a6" : "#ffffff"};
    border-bottom:  ${props => props.$isActive ? "1px solid #9758a6" : "none"};
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: #9758a6;
    }
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            font-weight: 700;
            color: #9758a6;
        }
    }
`
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`

export const Logout = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`