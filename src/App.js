import "../src/components/styles/App.css";
import CustomizedAccordions from "./components/CustomizedAccordions";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section
        leftTitle="Enjoy on your TV."
        leftText="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        rightImg="some Image"
      />
      <Section
        rightTitle="Download your shows to watch offline."
        rightText="Save your favorites easily and always have something to watch."
        leftImg="some Image"
      />
      <Section
        leftTitle="Watch everywhere.
        "
        leftText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        "
        rightImg="some Image"
      />
      <Section
        rightTitle="Create profiles for kids.
        "
        rightText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
        "
        leftImg="some Image"
      />

      <CustomizedAccordions />
      <Footer />
    </div>
  );
}

export default App;
