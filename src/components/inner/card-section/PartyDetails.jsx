import { FaLocationDot, FaCalendar, FaClock } from "react-icons/fa6";
import {
  VStack,
  Image,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import moment from "moment";
import AddWishDialog from "../dialogs/AddWishDialog";
import { PartyContext } from "@/pages/Invitation";
import { useContext } from "react";

function PartyDetails() {
  const partyDetails = useContext(PartyContext)

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
    <VStack
      rounded={"xl"}
      border={"1px solid white"}
      width={"100%"}
      height={"100%"}
      gap={{ base: 2, xl: 4 }}
      p={4}
      justify={"space-evenly"}
    >
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        textStyle={{ base: "2xl", md: "2xl" }}
      >
        {partyDetails.title ||
          `${partyDetails.celebrantFirstName} @ ${partyDetails.age}`}
      </Text>
      <Flex
        gap={4}
        width={"90%"}
        direction={{ base: "column", md: "row", xl: "column" }}
        justify={"center"}
        align={"center"}
      >
        <Image
          border={"5px solid lightgrey"}
          src={partyDetails.imgURL}
          alignSelf={"center"}
          rounded={"full"}
          width={"130px"}
          height={"130px"}
          alt={`${partyDetails.celebrantFirstName} ${partyDetails.celebrantLastName}`}
        ></Image>

        <Flex
          direction={"column"}
          align={"start"}
          width={{ base: "100%", md: "70%", xl: "100%" }}
          gap={2}
        >
          {program.map((info) => {
            return (
              <Flex width={"100%"} align={"center"} gap={4} mx={"auto"}>
                <Icon>{info.icon}</Icon>
                <Text>{info.text}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Text
        fontStyle={"italic"}
        mt={0}
        textStyle={{ base: "xs", sm: "sm" }}
        textAlign={"center"}
      >
        Please contact {partyDetails.contact.name} via{" "}
        {partyDetails.contact.means} on {partyDetails.contact.phone} for any
        dietary or other requirements. We hope to see you there! <br />
      </Text>
      {/* <Link
        textAlign={"center"}
        textStyle={"sm"}
        color={"pink.800"}
        fontFamily={"inherit"}
        fontWeight={"semibold"}
        rounded={"lg"}
        textDecoration={"underline"}
      >
        Click here to send {partyDetails.celebrantFirstName} a birthday wish
      </Link> */}
      <AddWishDialog />
    </VStack>
  );
}

export default PartyDetails;
