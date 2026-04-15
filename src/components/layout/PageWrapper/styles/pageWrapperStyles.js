import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  background-color: var(--bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
