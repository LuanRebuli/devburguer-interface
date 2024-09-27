import styled from "styled-components";
import BannerCardapio from "../../assets/cardapiobanner.svg";
import Background from "../../assets/bg-login.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 120%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("${Background}");
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  position: relative;

  background: url("${BannerCardapio}") no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${props => props.$isActiveCategory ? "#9758a6" : "#696969"};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && "3px solid #9758a6"};

`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;

export const BackText = styled.h1`
  text-decoration: none;
  cursor: pointer;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 12.96px;
  text-align: center;
  color: #5C2669;
  padding-bottom: 80px;
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
`;


