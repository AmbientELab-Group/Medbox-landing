import { motion } from "framer-motion";
import styled from "styled-components";

const ClickAway = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: #000;
`;

export default ClickAway;
