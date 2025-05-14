import { Flex } from "@chakra-ui/react";
import CardArea from "./card-section/CardArea";
import Wish from "./wishes-section/Wish";
import MobileInvitationTabs from "./MobileInvitationTabs";

function MainArea() {
  return (
    <Flex
      width={{ base: "95%", md: "90%", lg: "90%" }}
      bg={"white"}
      height={{ base: "90%", md: "85%", xl: "85%" }}
      boxShadow={"lg"}
      opacity={"1"}
      rounded={"xl"}
      direction={{ base: "column", xl: "row" }}
    >
      <Flex
        width={{ base: "100%", xl: "40%" }}
        height={{ base: "42%", lg: "47%", xl: "100%" }}
        display={{ base: "none", md: "flex" }}
        roundedBottomLeft={{ base: "xl", md: 'none', xl: "xl" }}
        roundedTopLeft={{ base: "xl" }}
        roundedTopRight={{ base: "xl", xl: "none" }}
      >
        <CardArea />
      </Flex>
      {/* <Flex width={{ xl: "60%" }} p={4} overflowY={"scroll"}>
        <Wish />
      </Flex> */}
      <Flex height={'100%'} display={{base: 'flex', md: 'none'}}>
        <MobileInvitationTabs />
      </Flex>

    </Flex>
  );
}

export default MainArea;
