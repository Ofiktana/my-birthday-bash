import { Text, Flex } from "@chakra-ui/react";

function WishesTitle({ name }) {
  return (
    <Text
      textAlign={"center"}
      color={"blue.600"}
      fontWeight={"bold"}
      textStyle={{base: "xl", md: '2xl'}}
      textShadow={"0 0 1px red"}

    >
      Birthday Wishes for {name}
    </Text>
  );
}

export default WishesTitle;
