import { Flex } from "@chakra-ui/react";
import PartyDetails from "./PartyDetails";

function CardArea() {
  return (
    <Flex
      width={{ base: "100%", xl: "40%" }}
      height={{ base: "40%", xl: "100%" }}
      display={{ base: "none", md: "flex" }}
      bgGradient={{base: 'to-r', xl: 'to-b'}}
      roundedBottomLeft={'inherit'}
      roundedTopLeft={'inherit'}
      gradientFrom={'teal.600'}
      gradientTo={'orange.400'}
      color={'white'}
    >
      <PartyDetails />
    </Flex>
  );
}

export default CardArea;
