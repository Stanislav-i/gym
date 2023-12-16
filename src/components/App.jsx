import About from './about/About';
import Advantages from './advantages/Advantages';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Membership from './membership/Membership';
import Trainers from './trainers/Trainers';
import { Container } from './Container';

export const App = () => {
  return (
    <Container>
      <Hero />
      <Advantages />
      <Membership />
      <About />
      <Trainers />
      <Footer />
    </Container>
  );
};
