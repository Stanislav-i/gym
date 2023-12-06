import Advantages from "./advantages/Advantages";
import Hero from "./hero/Hero";

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
    </div>
  );
};
