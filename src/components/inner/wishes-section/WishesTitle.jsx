import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PartyContext } from "@/pages/Invitation";

function WishesTitle() {
  const name = useContext(PartyContext).celebrantFirstName
  const { themeColor } = useContext(PartyContext)
  const darkThemeColor = `${themeColor}.600`
  const lightThemeColor = `${themeColor}.300`

  return (
    <Text
      textAlign={"center"}
      color={darkThemeColor}
      fontWeight={"bold"}
      textStyle={{base: "xl", md: '2xl'}}
    >
      Birthday Wishes for {name}
    </Text>
  );
}

export default WishesTitle;
