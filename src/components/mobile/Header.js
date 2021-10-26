import React from "react";
import styled from "styled-components";
import { sizing } from "../values";

import IMG from "../../assets/simple_logo_small.png";
export default function Header() {
  return (
    <Container>
      <Image src={IMG} />
    </Container>
  );
}

const Container = styled.div`
  height: ${sizing.headerHeight};
  width: 100vw;
  /* background-color: purple; */
  z-index: 20000;
  position: fixed;
  /* border-bottom: solid black 1px; */
  display: grid;
`;
const Image = styled.img`
  margin: ${sizing.ss} 0 ${sizing.sm} ${sizing.sm};
  height: ${sizing.headerHeight};
  -ms-interpolation-mode: none;
`;
