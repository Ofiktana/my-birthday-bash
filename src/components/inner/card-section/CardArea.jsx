import { Flex } from "@chakra-ui/react";
import PartyDetails from "./PartyDetails";

function CardArea() {
  return (
    <Flex
      bgGradient={{ base: "to-b", xl: "to-b" }}
      roundedBottomLeft={{ base: "xl", md: 'none', xl: "xl" }}
      roundedBottomRight={{ base: "xl", md: 'none' }}
      roundedTopLeft={{ base: "xl" }}
      roundedTopRight={{ base: "xl", xl: "none" }}
      gradientFrom={"blue.800"}
      gradientTo={"pink.300"}
      color={"white"}
      justify={"center"}
      align={"center"}
      p={1}
      height={{base: '100%'}}
    >
      <PartyDetails />
    </Flex>
  );
}

export default CardArea;
