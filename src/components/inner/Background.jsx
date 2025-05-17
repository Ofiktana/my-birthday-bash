import { Flex } from "@chakra-ui/react";

function Background({ image, children }) {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      bg={"green.300"}
      bgImage={`url(${image})`}
      bgRepeat={"repeat"}
      backgroundPosition={"center"}
      bgSize={{ base: "7vh 7vh", md: "7vw 7vw"}}
      justify={"center"}
      align={{ base: "end", md: "center" }}
      p={4}
      overflowY={'scroll'}
    >
      {children}
    </Flex>
  );
}

export default Background;
