import { Flex, Text, Link } from "@chakra-ui/react";
import CardArea from "./card-section/CardArea";
import MobileInvitationTabs from "./MobileInvitationTabs";
import WishesTitle from "./wishes-section/WishesTitle";
import WishesCatalog from "./wishes-section/WishesCatalog";

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
        height={{ base: "420px", lg: "450px", xl: "100%" }}
        display={{ base: "none", md: "flex" }}
        roundedBottomLeft={{ base: "xl", md: "none", xl: "xl" }}
        roundedTopLeft={{ base: "xl" }}
        roundedTopRight={{ base: "xl", xl: "none" }}
      >
        <CardArea />
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        height={{ base: "58%", lg: "53%", xl: "100%" }}
        direction={"column"}
        width={{ xl: "60%" }}
        p={4}
        gap={4}
        overflowY={'scroll'}
      >
        <WishesTitle name={"Jasper"} />
        <Flex justify={'space-between'} h={"100%"} direction={"column"}>
          <WishesCatalog />
        </Flex>
      </Flex>
      <Flex height={"100%"} display={{ base: "flex", md: "none" }}>
        <MobileInvitationTabs />
      </Flex>
    </Flex>
  );
}

export default MainArea;
