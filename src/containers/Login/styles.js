import styled from "styled-components"
import { Link as ReactLink } from "react-router-dom"


import Background from "../../assets/background.svg"
import BackgroundLogin from "../../assets/bg-login.svg"


export const Container = styled.div`    
    display: flex;
    height: 100vh;
    width: 100vw;

`

export const LeftContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${BackgroundLogin}');
    background-color:#1e1e1e;
`

export const Tittle = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    font-weight: 400;
    color: #FFFFFF;

    text-align: center;
    margin-bottom: 60px;

    span {
        color: #9758A6;
        font-family: "Road Rage", sans-serif;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;

    label {
    font-size: 18px;   
    font-weight: 600; 
    }
    
    input {
    margin-bottom: 40px;

    width: 350px;
    height: 52px;

    border-radius: 5px 0px 0px 0px;
    padding: 10px;

    font-weight: 400;
    color: black;
    }
`

export const P = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: white;

    margin-top: 20px;
`
export const Link = styled(ReactLink)`
    text-decoration: underline;
    cursor: pointer;
`


