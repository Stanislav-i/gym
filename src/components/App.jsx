import About from "./about/About";
import Advantages from "./advantages/Advantages";
import Hero from "./hero/Hero";
import Membership from "./membership/Membership";
import Trainers from "./trainers/Trainers";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
    >
    <Hero />
    <Advantages />
    <Membership />
    <About />
    <Trainers />
    </div>
  );
};
