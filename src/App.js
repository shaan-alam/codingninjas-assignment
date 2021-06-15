import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Events from "./components/Events";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/all_events/Upcoming");
  }, []);

  return (
    <Section>
      <Navbar />
      <Header />
      <div className="circuit">
        <img src="./images/circuit.svg" />
      </div>
      <div className="gradient">
        <img src="./images/gradient.svg" />
      </div>
      <Events />
    </Section>
  );
}

export default App;

const Section = styled.section`
  background: #032d6b;
  height: auto;
  position: relative;

  .circuit {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .gradient {
    img {
      filter: blur(60px);
      height: 400px;
    }

    position: absolute;
    top: -50px;
    right: -0px;
    z-index: 1;
  }
`;
