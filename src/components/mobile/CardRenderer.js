import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { sizing } from "../values";
import IMG from "../../assets/monolith.png";
import ArtistIMG from "../../assets/artist.png";
import { Instagram, Twitter } from "../icons/Icons";

export default function CardRenderer(props) {
  return (
    <CardContainer>
      {props.scrollSwitch === 0 && (
        <Card content={cardProps(0)} dimensions={props.cubeDimensions}></Card>
      )}
      {props.scrollSwitch === 1 && (
        <Card content={cardProps(1)} dimensions={props.cubeDimensions}>
          <Spacing size={sizing.sm}>
            <Title color={cardProps(0)}>1st album: monolith</Title>
          </Spacing>
          <A
            href="https://friendship.lnk.to/monolith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={IMG} dimensions={props.cubeDimensions} animate={true} />
          </A>
        </Card>
      )}
      {props.scrollSwitch === 2 && (
        <Card content={cardProps(2)} dimensions={props.cubeDimensions}>
          <Spacing size={sizing.ss}>
            <Title color={cardProps(0)}>we are</Title>
          </Spacing>
          <Image
            src={ArtistIMG}
            dimensions={props.cubeDimensions}
            animate={false}
          />
          <UL>
            <LI>noah watanabe</LI>
            <LI>ayumu tsutsui</LI>
            <LI>yusuke arai</LI>
            <LI>keiichiro nishizawa</LI>
            <LI>ariki suda</LI>
          </UL>
        </Card>
      )}
      {props.scrollSwitch === 3 && (
        <Card content={cardProps(3)} dimensions={props.cubeDimensions}>
          <Spacing size={sizing.ss}>
            <Title>socials</Title>
          </Spacing>
          <IconsContainer sizing={sizing}>
            <Instagram />
            <Twitter />
          </IconsContainer>
        </Card>
      )}
      {props.scrollSwitch === 4 && (
        <Card content={cardProps(4)} dimensions={props.cubeDimensions}>
          <Spacing size={sizing.ss}>
            <Title>contact</Title>
          </Spacing>
          <Mail sizing={sizing}>hyuen@gmail.com</Mail>
        </Card>
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  z-index: 33;
  /* top: 0; */
  position: fixed;
  /* height: 100vh; */
  height: 100%;
  width: 100vw;
  display: grid;
`;
const fadeIn = keyframes`
from {
  opacity:0
} to {
  opacity: 1;
}
`;
const Card = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  justify-self: center;
  align-self: center;
  height: ${({ dimensions }) => dimensions.cubeHeight}px;
  width: ${({ dimensions }) => dimensions.cubeWidth}px;
  color: ${({ content }) => content.color};
  display: grid;
  grid-row-gap: ${sizing.sm};
  grid-template-rows: auto 1fr auto;
  /* background-color: red; */
`;

const cardProps = (num) => {
  const colors = ["none", "black", "black", "white", "black"];
  return { color: colors[num] };
};
const Spacing = styled.div`
  margin: 0 ${({ size }) => size} 0 ${({ size }) => size};
`;
const Title = styled.h1`
  font-family: "athelas";
  font-weight: normal;
  color: ${({ color }) => color};
  margin: none;
  font-size: ${sizing.sm};
`;

const Glow = keyframes`
  0% {
    border:rgba(72, 138, 140,0) 2px solid;
  }
  50% {
    border:rgba(72, 138, 140,0.9) 2px solid;
  }
  100%{
    border:rgba(72, 138, 140,0) 2px solid;
  }
`;

const Image = styled.img`
  /* height: ${({ dimensions }) => dimensions.cubeHeight * 0.8}px; */
  width: ${({ dimensions }) => dimensions.cubeWidth * 0.8}px;
  justify-self: center;
  animation: ${({ animate }) =>
    animate
      ? css`
          ${Glow} 3s infinite
        `
      : "none"};
`;

const A = styled.a`
  justify-self: center;
`;

const UL = styled.ul`
  list-style-type: lower-greek;
`;

const LI = styled.li``;

const IconsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: ${({ sizing }) => sizing.sm};
`;

const Mail = styled.div`
  font-size: ${({ sizing }) => sizing.sm};
  color: black;
  justify-self: center;
  /* align-self: center; */
  font-family: "athelas";
`;
