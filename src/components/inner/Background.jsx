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
      bgSize={"75px 100px"}
      justify={'center'}
      align={{base: 'end', md: 'center'}}
      p={4}
    >
      {children}
    </Flex>
  );
}

export default Background;
