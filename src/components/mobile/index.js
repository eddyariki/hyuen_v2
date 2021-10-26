import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import { sizing } from "../values";
import CardRenderer from "./CardRenderer";
export default function Mobile() {
  const sketchRef = useRef();
  const scrollRef = useRef();

  // used for the cards show/hide sequence
  const [scrollSwitch, setScrollSwtich] = useState(0);

  // Not using useState for scroll because
  // scroll is used only inside the handleScroll
  // function which is used in the eventListener.
  // The values of scroll updates the p5js instance,
  // and does not change any DOM elements
  let scroll = 0;
  const mid = 25 / 2;
  const margin = 3;
  const scrollSensitivity = "1300vh";
  const cubeHeight = 100;
  const cubeWidth = 60;
  const maxSize = 4;
  const offset = 0;
  const cubeDimensions = {
    cubeWidth: cubeWidth * maxSize,
    cubeHeight: cubeHeight * maxSize,
  };
  const handleScroll = (event) => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    scroll = window.scrollY / scrollable > 1 ? 1 : window.scrollY / scrollable;
    const tScroll = scroll * 100;
    if (tScroll >= mid - margin && tScroll < mid + margin) {
      setScrollSwtich(1);
    } else if (tScroll >= 25 + mid - margin && tScroll < 25 + mid + margin) {
      setScrollSwtich(2);
    } else if (tScroll >= 50 + mid - margin && tScroll < 50 + mid + margin) {
      setScrollSwtich(3);
    } else if (tScroll >= 75 + mid - margin && tScroll < 75 + mid + margin) {
      setScrollSwtich(4);
    } else {
      setScrollSwtich(0);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    const p5Canvas = new p5(initSketch, sketchRef.current);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      p5Canvas.remove();
    };
  }, []);

  const initSketch = (p) => {
    let counter = 0;
    const drawRect = (x, y, z, rotation, width, height, color) => {
      p.push();
      p.translate(x, y, z);
      p.rotateY(rotation);
      p.beginShape();
      p.fill(color);
      p.strokeWeight(3);
      p.stroke(0);
      p.vertex(0, 0, 0);
      p.vertex(0, height, 0);
      p.vertex(width, height, 0);
      p.vertex(width, 0, 0);
      p.endShape(p.CLOSE);
      p.pop();
    };

    const drawCube = (x, y, rotation, fills, lerp, maxSize) => {
      let width = cubeWidth;
      let height = cubeHeight;
      let thickness = 8;
      let lWidth = p.map(lerp, 0, 1, width, width * maxSize);
      let lHeight = p.map(lerp, 0, 1, height, height * maxSize);
      let lThickness = p.map(lerp, 0, 1, thickness, thickness * maxSize);
      let lX = p.map(lerp, 0, 1, x, -lWidth / 2);
      let lY = p.map(lerp, 0, 1, y, -lHeight / 2);
      let lZ = p.map(lerp, 0, 1, 0, 120);
      p.push();
      p.translate(lX, lY, lZ);
      p.rotateY(rotation);
      drawRect(0, 0, 0, 0, lWidth, lHeight, fills[0]);
      drawRect(lWidth, 0, 0, 90, lThickness, lHeight, fills[1]);
      drawRect(0, 0, -lThickness, 0, lWidth, lHeight, fills[2]);
      drawRect(0, 0, 0, 90, lThickness, lHeight, fills[3]);
      p.pop();
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.ortho();
      p.angleMode(p.DEGREES);
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.ortho();
      p.angleMode(p.DEGREES);
    };

    p.draw = () => {
      counter = scroll * 100;

      p.background(
        // counter >= 50 + mid - margin && counter < 50 + mid + margin ? 0 : 255
        255
      );
      p.fill(0);
      // p.rect(-p.width / 2, -p.height / 2, 200, 200);

      drawCube(
        -cubeWidth * 2 + cubeWidth / 2 - cubeWidth / 3,
        -p.height / 2 + offset,
        (1 - p.sin(p.map(counter * (counter < 25), 0, 25, 0, 180))) * -55,
        [255, 0, 255, 255, 255],
        p.sin(p.map(counter * (counter < 25), 0, 25, 0, 180)),
        maxSize
      );

      drawCube(
        -cubeWidth + cubeWidth / 2 - cubeWidth / 3,
        -p.height / 2 + offset,
        (1 -
          p.sin(
            p.map(
              (counter - 25) * (counter < 50 && counter >= 25),
              0,
              25,
              0,
              180
            )
          )) *
          -55,
        [255, 255, 255, 255, 255],
        p.sin(
          p.map((counter - 25) * (counter < 50 && counter >= 25), 0, 25, 0, 180)
        ),
        maxSize
      );
      drawCube(
        cubeWidth - cubeWidth / 2 - cubeWidth / 3,
        -p.height / 2 + offset,
        (1 -
          p.sin(
            p.map(
              (counter - 50) * (counter < 75 && counter >= 50),
              0,
              25,
              0,
              180
            )
          )) *
          -55,
        [0, 255, 255, 255, 255],
        p.sin(
          p.map((counter - 50) * (counter < 75 && counter >= 50), 0, 25, 0, 180)
        ),
        maxSize
      );
      drawCube(
        cubeWidth * 2 - cubeWidth / 2 - cubeWidth / 3,
        -p.height / 2 + offset,
        (1 -
          p.sin(
            p.map(
              (counter - 75) * (counter < 100 && counter >= 75),
              0,
              25,
              0,
              180
            )
          )) *
          -55,
        [255, 255, 255, 255, 255],
        p.sin(
          p.map(
            (counter - 75) * (counter < 100 && counter >= 75),
            0,
            25,
            0,
            180
          )
        ),
        maxSize
      );
    };
  };

  return (
    <Container style={{ height: scrollSensitivity }} ref={scrollRef}>
      <Header />
      <SubContainer>
        <SketchContainer ref={sketchRef} />
        <CardRenderer
          cubeDimensions={cubeDimensions}
          scrollSwitch={scrollSwitch}
        />
      </SubContainer>
    </Container>
  );
}
const Container = styled.div``;
const SubContainer = styled.div`
  padding-top: ${sizing.headerHeight};
`;
const SketchContainer = styled.div`
  position: fixed;
  z-index: 0;
`;
