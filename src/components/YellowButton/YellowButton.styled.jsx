import styled from 'styled-components';

export const YellowButton = styled.button`
  background-color: var(--color-accent);
  color: #000000;
  font-weight: var(--fw-semi-bold);
  border-radius: 30px 30px 30px 30px;
  padding: ${({ pd }) => pd || '16px 50px'};
  width: ${({ $wdth }) => $wdth || '170px'};
  height: ${({ $hgth }) => $hgth || '50px'};

  cursor: pointer;
`;
