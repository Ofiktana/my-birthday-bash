import Background from "@/components/inner/Background";
import soccerBgImage from "../../src/assets/football.jpeg";
import MainArea from "@/components/inner/MainArea";
import { createContext } from "react";
import jasper from '../assets/jasper.jpg'

const PartyContext = createContext();

function Invitation() {

  const partyDetails = {
    celebrantFirstName: "Jasper",
    celebrantLastName: "Ofik",
    imgURL: jasper,
    age: 7,
    title: "Jasper's 7th Birthday",
    location: "Flat 2, GilMartins House, 102 Collingdon Street, Luton. LU1 1RX",
    start: new Date(2025, 4, 24, 16, 0, 0),
    end: new Date(2025, 4, 24, 18, 0, 0),
    contact: {
      name: "Belema",
      means: "WhatsApp",
      phone: "07407147184",
    },
    themeColor: "cyan",
  };

  return (
    <PartyContext.Provider value={partyDetails}>
      <Background image={soccerBgImage}>
        <MainArea />
      </Background>
    </PartyContext.Provider>
  );
}

export default Invitation;

export { PartyContext }
