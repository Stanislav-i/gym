import styled from 'styled-components';

export const ApplyButton = styled.button`
  background-color: var(--color-accent);
  color: #000000;
  font-weight: var(--fw-semi-bold);
  font-size: ${({ $fs }) => $fs || 'var(--fs-md)'};
  border-radius: 30px 30px 30px 30px;
  padding: ${({ $pd }) => $pd || '16px 50px'};
  width: ${({ $wdth }) => $wdth || '170px'};
  height: ${({ $hgth }) => $hgth || '50px'};

  cursor: pointer;
`;
