import { Flex } from "@chakra-ui/react";
import PartyDetails from "./PartyDetails";
import { useContext } from "react";
import { PartyContext } from "@/pages/Invitation";

function CardArea() {
  const { themeColor } = useContext(PartyContext)
  const darkThemeColor = `${themeColor}.800`
  const lightThemeColor = `${themeColor}.300`

  return (
    <Flex
      bgGradient={{ base: "to-b", xl: "to-b" }}
      roundedBottomLeft={{ base: "xl", md: 'none', xl: "xl" }}
      roundedBottomRight={{ base: "xl", md: 'none' }}
      roundedTopLeft={{ base: "xl" }}
      roundedTopRight={{ base: "xl", xl: "none" }}
      gradientFrom={darkThemeColor}
      gradientTo={lightThemeColor}
      color={"white"}
      justify={"center"}
      align={"center"}
      p={1}
      height={{base: '100%'}}
      width={{base: '100%'}}
    >
      <PartyDetails />
    </Flex>
  );
}

export default CardArea;
