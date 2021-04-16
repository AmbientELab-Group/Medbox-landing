import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import RightArrowIcon from "../assets/right-arrow.svg";
import LeftArrowIcon from "../assets/left-arrow.svg";
import { motion } from "framer-motion";

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const SlideWrapper = styled.div`
  height: 100%;
  flex: 0.8;
  overflow: hidden;
  position: relative;
`;

const ChildrenWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const SliderSide = styled.div`
  height: 100%;
  flex: 0.1;
  min-width: 40px;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 80px;
  }
`;

const ArrowWrapper = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  cursor: pointer;
`;

const ChildrenVariants = {
  prev: {
    x: "-100%",
    transition: {
      type: "tween",
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
    },
  },
  next: {
    x: "100%",
    transition: {
      type: "tween",
    },
  },
};

const getChildrenRight = (children, visibleIdx) => (
  <>
    <ChildrenWrapper
      initial="visible"
      animate="prev"
      variants={ChildrenVariants}
      key={visibleIdx - 1}
    >
      {children[visibleIdx - 1]}
    </ChildrenWrapper>
    <ChildrenWrapper
      initial="next"
      animate="visible"
      variants={ChildrenVariants}
      key={visibleIdx}
    >
      {children[visibleIdx]}
    </ChildrenWrapper>
  </>
);

const getChildrenLeft = (children, visibleIdx) => (
  <>
    <ChildrenWrapper
      initial="prev"
      animate="visible"
      variants={ChildrenVariants}
      key={visibleIdx}
    >
      {children[visibleIdx]}
    </ChildrenWrapper>
    <ChildrenWrapper
      initial="visible"
      animate="next"
      variants={ChildrenVariants}
      key={visibleIdx + 1}
    >
      {children[visibleIdx + 1]}
    </ChildrenWrapper>
  </>
);

const getChildrenCount = (children) => {
  if (!children) {
    throw Error("Slider requires at least one child element.");
  }

  let itemCount = 1;
  if (Array.isArray(children)) {
    itemCount = children.length;
  }
  return itemCount;
};

const Slider = ({ children, className }) => {
  const [visibleIdx, setVisibleIdx] = useState(0);
  const itemCount = useRef(getChildrenCount(children));
  const [activeChildren, setActiveChildren] = useState(null);

  useEffect(() => {
    setActiveChildren(
      <ChildrenWrapper>
        {itemCount.current === 1 ? children : children[0]}
      </ChildrenWrapper>
    );
  }, [children]);

  const hasPrevSlide = () => visibleIdx > 0;
  const hasNextSlide = () => visibleIdx < itemCount.current - 1;

  const goNext = () => {
    const newIdx = hasNextSlide() ? visibleIdx + 1 : visibleIdx;
    setVisibleIdx(newIdx);
    setActiveChildren(getChildrenRight(children, newIdx));
  };
  const goBack = () => {
    const newIdx = hasPrevSlide() ? visibleIdx - 1 : visibleIdx;
    setVisibleIdx(newIdx);
    setActiveChildren(getChildrenLeft(children, newIdx));
  };

  return (
    <SliderContainer className={className}>
      <SliderSide>
        {hasPrevSlide() && (
          <ArrowWrapper>
            <LeftArrowIcon onClick={goBack} />
          </ArrowWrapper>
        )}
      </SliderSide>
      <SlideWrapper>{activeChildren}</SlideWrapper>
      <SliderSide>
        {hasNextSlide() && (
          <ArrowWrapper>
            <RightArrowIcon onClick={goNext} />
          </ArrowWrapper>
        )}
      </SliderSide>
    </SliderContainer>
  );
};

export default Slider;
