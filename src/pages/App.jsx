import { useState } from "react";
import {
  Nav,
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Portfolio,
  Testimonials,
  Services,
} from "../components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
