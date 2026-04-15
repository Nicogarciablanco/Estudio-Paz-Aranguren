import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 3rem 4rem;
  text-align: center;
  color: var(--secondary-gray);
  font-size: 0.85rem;
  border-top: 1px solid rgba(10, 10, 10, 0.05);

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    white-space: pre-line;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    font-size: 0.75rem;
  }
`;
