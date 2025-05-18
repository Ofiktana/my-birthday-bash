import { Tabs, Text, Flex } from "@chakra-ui/react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbJewishStar } from "react-icons/tb";
import CardArea from "./card-section/CardArea";
import WishesCatalog from "./wishes-section/WishesCatalog";
import { useContext } from "react";
import { PartyContext } from "@/pages/Invitation";

function MobileInvitationTabs() {
  const { themeColor } = useContext(PartyContext)
  const lightThemeColor = `${themeColor}.300`

  return (
    <Tabs.Root
      colorPalette={themeColor}
      width={"100%"}
      height={"100%"}
      defaultValue="invitation"
      variant="plain"
    >
      <Tabs.List bg={lightThemeColor} rounded="l3" p="1" mx={4} mt={4}>
        <Tabs.Trigger  value="invitation">
          <SlEnvolopeLetter />
          <Text fontWeight={'bold'}>Invitation</Text>
          
        </Tabs.Trigger>
        <Tabs.Trigger value="wishes">
          <TbJewishStar />
          <Text fontWeight={'bold'}>Wishes</Text>
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content height={"92%"} value="invitation">
        <CardArea />
      </Tabs.Content>
      <Tabs.Content height={"88%"} value="wishes">
        <Flex justify={'space-between'} h={"100%"} direction={"column"}>

        <WishesCatalog />
        </Flex>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default MobileInvitationTabs;
