import { Flex } from "@chakra-ui/react";
import PartyDetails from "./PartyDetails";

function CardArea() {
  return (
    <Flex
      width={{ base: "100%", xl: "40%" }}
      height={{ base: "42%", lg: "40%", xl: "100%" }}
      display={{ base: "none", md: "flex" }}
      bgGradient={{ base: "to-r", xl: "to-b" }}
      roundedBottomLeft={{ base: "none", xl: "inherit" }}
      roundedTopLeft={{ base: "inherit" }}
      roundedTopRight={{ base: "inherit", xl: "none" }}
      gradientFrom={"blue.600"}
      gradientTo={"pink.300"}
      color={"white"}
      justify={"center"}
      align={"center"}
      p={1}
    >
      <PartyDetails />
    </Flex>
  );
}

export default CardArea;
