import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Events from "./components/Events/index";
import Footer from "./components/Footer/index";
import Links from "./components/Links/index";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/all_events/Upcoming?tag_list=");
  }, [history]);

  return (
    <Section>
      <Navbar />
      <Header />
      <Events />
      <div className="circuit">
        <img src="/images/circuit.svg" alt="Circuit" />
      </div>
      <div className="gradient">
        <img src="/images/gradient.svg" alt="Gradient" />
      </div>
      <Footer />
      <Links />
    </Section>
  );
}

export default App;

const Section = styled.section`
  background: #032d6b;
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
