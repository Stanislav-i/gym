import { Container } from 'components/Container';
import React from 'react';
import { MembershipList, SectionTitle, Wrapper } from './Membership.styled';
import MembershipCard from './membershipCard/MembershipCard';
import { memberships } from './membershipDB';

const Membership = () => {
  return (
    <Container>
      <Wrapper id="membership">
        <SectionTitle>Gym membership</SectionTitle>
        <MembershipList>
          {memberships.map(({ pass, cost, features }) => (
            <li key={pass}>
              <MembershipCard pass={pass} cost={cost} features={features} />
            </li>
          ))}
        </MembershipList>
      </Wrapper>
    </Container>
  );
};

export default Membership;
