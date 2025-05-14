import { Flex } from "@chakra-ui/react";
import CardArea from "./card-section/CardArea";

function MainArea() {
  return (
    <Flex
      width={{ base: "95%", md: "90%", lg: "90%" }}
      bg={"white"}
      height={{ base: "90%", md: "85%", xl: "85%" }}
      boxShadow={"lg"}
      opacity={"1"}
      rounded={"xl"}
    >
      <CardArea />
    </Flex>
  );
}

export default MainArea;
