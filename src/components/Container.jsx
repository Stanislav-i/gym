import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* max-width: 1600px; */
    margin: 0 auto;
    /* padding: 0 2rem; */

    @media (min-width: 393px) {
        width: 393px;
  }

    @media (min-width: 744px) {
        width: 744px;
  }

  @media (min-width: 1000px) {
        width: 1000px;
  }

  @media (min-width: 1600px) {
        width: 1600px;
  }
`;