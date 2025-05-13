import { FaLocationDot, FaCalendar, FaClock } from "react-icons/fa6";
import { VStack, HStack, Text } from "@chakra-ui/react";
import moment from "moment";

function PartyDetails() {
  const partyDetails = {
    location: "Flat 2, GilMartins House, 102 Collingdon Street, Luton. LU1 1RX",
    start: new Date(2025, 4, 17, 15, 0, 0),
    end: new Date(2025, 4, 17, 18, 0, 0),
    contact: {
      name: "Belema",
      means: "WhatsApp",
      phone: "07407147184",
    },
  };

  const program = [
    {
      icon: <FaLocationDot style={{ height: "100%" }} />,
      text: partyDetails.location,
    },
    {
      icon: <FaCalendar style={{ height: "100%" }} />,
      text: moment(partyDetails.start).format("MMMM Do YYYY"),
    },
    {
      icon: <FaClock style={{ height: "100%" }} />,
      text: `${moment(partyDetails.start).format("LT")} - ${moment(
        partyDetails.end
      ).format("LT")}`,
    },
  ];

  return (
    <VStack width={"100%"} gap={4}>
      {program.map((info) => {
        return (
          <HStack gap={4} width={"70%"} mx={"auto"}>
            {info.icon}
            <Text>{info.text}</Text>
          </HStack>
        );
      })}
      <Text mt={4} textStyle={"sm"} textAlign={"center"}>
        Please RSVP to {partyDetails.contact.name} via{" "}
        {partyDetails.contact.means} on {partyDetails.contact.phone} and let us know if your child has any
        dietary or other requirements. We hope to see you there!
      </Text>
    </VStack>
  );
}

export default PartyDetails;
