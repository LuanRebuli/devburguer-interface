import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #363636;

    img {
        width: 60%;
        margin: 40px 0;
        cursor: pointer;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    background-color: ${props => props.$isActive ? "#9758A6" : "transparent"};

    &:hover {
        background-color: #9758A6;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: default;
`